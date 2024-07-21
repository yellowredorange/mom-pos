<template>
  <q-page padding class="menu-editor">
    <h1 class="text-2xl font-bold mb-4">Menu Configuration</h1>
    <div v-for="(category, categoryIndex) in categories" :key="category.categoryId" class="mb-8" :id="`category-${category.categoryId}`">
      <div class="flex items-center mb-2">
        <div class="w-1/12 drag-handle" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
          <div class="text-sm font-medium">Index</div>
          <q-input 
            v-model.number="category.sortOrder" 
            type="number" 
            dense 
            @change="updateCategorySortOrder(category, categoryIndex)"
          />
        </div>
        <div class="w-11/12 px-2">
          <div class="text-sm font-medium">Category Name</div>
          <q-input v-model="category.name" dense @change="markCategoryAsChanged(category)" />
        </div>
      </div>
      <q-list bordered separator>
        <draggable 
          v-model="category.menuItems" 
          group="menuItems" 
          @change="updateItemSortOrder(category)"
          item-key="menuItemId"
          handle=".drag-handle"
        >
          <template #item="{ element, index }">
            <q-item>
              <q-item-section avatar>
                <div class="drag-handle cursor-move">
                  <q-icon name="drag_indicator" />
                </div>
              </q-item-section>
              <q-item-section avatar>
                <q-img
                  :src="element.photoUrl || 'path/to/default/image.jpg'"
                  style="width: 50px; height: 50px;"
                  fit="cover"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label :class="{ 'text-gray-500': !element.isActive }" class="text-lg">
                  {{ index + 1 }}. {{ element.name }}
                </q-item-label>
                <q-item-label caption class="text-base">
                  <div class="description-container">{{ element.description }}</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle 
                  v-model="element.isActive" 
                  @update:model-value="updateMenuItem(element)"
                >
                  <q-tooltip>Toggle item availability</q-tooltip>
                </q-toggle>
                <q-btn color="primary" label="Edit" @click="editMenuItem(element)" class="text-base" />
              </q-item-section>
            </q-item>
          </template>
        </draggable>
      </q-list>
      <q-btn color="positive" class="mt-2 text-base" label="Add Item" @click="addMenuItem(category)" />
    </div>

    <q-dialog v-model="editDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section class="row items-center">
          <div class="text-xl text-gray-800 font-bold">{{ isNewItem ? 'Add Item' : 'Edit Item' }}</div>
          <q-space />
          <q-btn icon="close" flat color="primary" round dense v-close-popup @click="resetEditedItem" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="editedItem.name" label="Name" class="text-lg" />
          <q-input
            v-model="editedItem.description"
            label="Description"
            type="textarea"
            autogrow
            :min-rows="2"
            class="text-lg"
          />
          <q-input v-model.number="editedItem.price" label="Price" type="number" class="text-lg" />
          <q-toggle v-model="editedItem.isActive" label="Available" class="text-sm  text-primary"  :class="[editedItem.isActive ? 'text-primary' : 'text-grey']" />
          <div v-if="editedItem.photoUrl" class="q-mt-md">
            <q-img :src="editedItem.photoUrl" style="max-width: 200px; max-height: 200px;" />
            <q-btn color="primary" label="Upload New Image" @click="openImageUpload" class="q-mt-sm" />
          </div>
          <div v-else>
            <q-btn color="primary" label="Upload Image" @click="openImageUpload" class="q-mt-sm" />
          </div>
          
          <input type="file" ref="fileInput" @change="handleFileChange" accept="image/*" style="display: none;" />
        </q-card-section>

        <q-card-actions align="between">
          <q-btn label="Cancel" flat color="primary" v-close-popup @click="resetEditedItem" class="text-lg" />
          <q-btn label="Save" color="secondary" @click="saveMenuItem" :loading="isSaving" class="text-lg" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="cropperDialog">
      <q-card style="min-width: 300px">
        <q-card-section>
          <vue-picture-cropper
            :boxStyle="{
              width: '100%',
              height: '300px',
              backgroundColor: '#f7f7f7',
              margin: 'auto'
            }"
            :img="cropperImg"
            :options="{
              viewMode: 1,
              dragMode: 'crop',
              aspectRatio: 1,
              cropBoxResizable: false,
            }"
            @cropper-init="cropperInit"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn label="Confirm" color="secondary" @click="confirmCrop" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn 
        fab
        icon="save" 
        color="secondary" 
        @click="saveAllChanges"
        :disable="!hasChanges"
        size="lg"
      >
        <q-tooltip>Save all changes</q-tooltip>
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script lang="ts" setup>
import { uploadToImgur } from '../api/ImgurApi';
import { ref, computed, nextTick } from 'vue';
import { useMenuStore } from '../stores/menuStore';
import { MenuItem, Category } from '../interfaces/Menu';
import draggable from 'vuedraggable';
import { useQuasar } from 'quasar';
import VuePictureCropper from 'vue-picture-cropper';
import { onBeforeRouteLeave } from 'vue-router';

const $q = useQuasar();
const menuStore = useMenuStore();
const categories = computed(() => menuStore.categories);

const editDialog = ref(false);
const cropperDialog = ref(false);
const editedItem = ref<MenuItem>({} as MenuItem);
const isNewItem = ref(false);
const isSaving = ref(false);
const changedCategories = ref<Set<number>>(new Set());
const changedItems = ref<Set<number>>(new Set());
const cropperImg = ref('');
const cropper = ref(null);
const fileInput = ref<HTMLInputElement | null>(null);
const hasChanges = computed(() => changedCategories.value.size > 0 || changedItems.value.size > 0);
const croppedImageBlob = ref<Blob | null>(null);

const touchStartY = ref(0);
const touchEndY = ref(0);
const isSwiping = ref(false);
const swipeThreshold = 10; // pixels

const handleTouchStart = (event: TouchEvent) => {
  touchStartY.value = event.touches[0].clientY;
};

const handleTouchMove = (event: TouchEvent) => {
  touchEndY.value = event.touches[0].clientY;
  const deltaY = touchEndY.value - touchStartY.value;

  if (Math.abs(deltaY) > swipeThreshold) {
    isSwiping.value = true;
  }

  if (isSwiping.value) {
    // Allow page scrolling
    event.stopPropagation();
  }
};

const handleTouchEnd = (event: TouchEvent) => {
  if (!isSwiping.value) {
    // If not swiping, treat as a click event
    const input = event.target as HTMLInputElement;
    input.focus();
  }
  isSwiping.value = false;
};

const editMenuItem = (item: MenuItem) => {
  editedItem.value = { ...item };
  isNewItem.value = false;
  editDialog.value = true;
};

const addMenuItem = (category: Category) => {
  editedItem.value = {
    menuItemId: 0,
    name: '',
    description: '',
    price: 0,
    isActive: true,
    photoUrl: '',
    sortOrder: category.menuItems.length,
    categoryId: category.categoryId,
    menuItemOptions: []
  };
  isNewItem.value = true;
  editDialog.value = true;
};

const cropperInit = (cropperInstance: any) => {
  cropper.value = cropperInstance;
};

const openImageUpload = () => {
  fileInput.value?.click();
};

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      cropperImg.value = event.target?.result as string;
      cropperDialog.value = true;
    };
    reader.readAsDataURL(file);
  }
};

const confirmCrop = () => {
  if (cropper.value) {
    // cropper.value.getCroppedCanvas().toBlob((blob: Blob) => {
    //   croppedImageBlob.value = blob;
    //   editedItem.value.photoUrl = URL.createObjectURL(blob);
    //   cropperDialog.value = false;
    // });
  }
};

const uploadImage = async () => {
  if (croppedImageBlob.value) {
    try {
      const imageUrl = await uploadToImgur(croppedImageBlob.value);
      editedItem.value.photoUrl = imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      $q.notify({
        color: 'negative',
        message: 'Failed to upload image. Please try again.'
      });
    }
  }
};

const saveMenuItem = async () => {
  try {
    isSaving.value = true;
    await uploadImage();
    if (isNewItem.value) {
      await menuStore.addMenuItem(editedItem.value);
    } else {
      await menuStore.updateMenuItem(editedItem.value);
    }
    changedItems.value.add(editedItem.value.menuItemId);
    $q.notify({
      color: 'positive',
      message: 'Item saved successfully'
    });
    editDialog.value = false;
  } catch (error) {
    console.error('Error saving menu item:', error);
    $q.notify({
      color: 'negative',
      message: 'Failed to save item. Please try again.'
    });
  } finally {
    isSaving.value = false;
    resetEditedItem();
  }
};

const resetEditedItem = () => {
  editedItem.value = {} as MenuItem;
  cropperImg.value = '';
  croppedImageBlob.value = null;
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

const markCategoryAsChanged = (category: Category) => {
  changedCategories.value.add(category.categoryId);
};

const updateCategorySortOrder = async (category: Category, index: number) => {
  const maxSortOrder = categories.value.length;
  category.sortOrder = Math.max(1, Math.min(category.sortOrder, maxSortOrder));
  
  if (category.sortOrder !== index + 1) {
    const oldIndex = index;
    const newIndex = category.sortOrder - 1;
    const categoryToMove = categories.value.splice(oldIndex, 1)[0];
    categories.value.splice(newIndex, 0, categoryToMove);
    
    categories.value.forEach((cat, idx) => {
      cat.sortOrder = idx + 1;
      changedCategories.value.add(cat.categoryId);
    });

    await nextTick();
  }
};


const updateItemSortOrder = (category: Category) => {
  category.menuItems.forEach((item, index) => {
    if (item.sortOrder !== index + 1) {
      item.sortOrder = index + 1;
      changedItems.value.add(item.menuItemId);
    }
  });
};

const updateMenuItem = (item: MenuItem) => {
  changedItems.value.add(item.menuItemId);
};

const saveAllChanges = async () => {
  try {
    isSaving.value = true;
    for (const categoryId of changedCategories.value) {
      const category = categories.value.find(c => c.categoryId === categoryId);
      if (category) {
        await menuStore.updateCategory(category);
      }
    }
    for (const itemId of changedItems.value) {
      const item = categories.value.flatMap(c => c.menuItems).find(i => i.menuItemId === itemId);
      if (item) {
        await menuStore.updateMenuItem(item);
      }
    }
    changedCategories.value.clear();
    changedItems.value.clear();
    $q.notify({
      color: 'positive',
      message: 'All changes saved successfully'
    });
  } catch (error) {
    console.error('Error saving changes:', error);
    $q.notify({
      color: 'negative',
      message: 'Failed to save changes. Please try again.'
    });
  } finally {
    isSaving.value = false;
  }
};

onBeforeRouteLeave((to, from, next) => {
  if (hasChanges.value) {
    $q.dialog({
      title: 'Unsaved Changes',
      message: 'You have unsaved changes. Do you want to save before leaving?',
      ok: 'Save',
      cancel: 'Discard',
      persistent: true
    }).onOk(() => {
      saveAllChanges().then(() => next());
    }).onCancel(() => {
      next();
    });
  } else {
    next();
  }
});
</script>

<style scoped>
.menu-editor {
  height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* For smooth scrolling on iOS */
}
.description-container {
  min-height: 20px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.drag-handle {
  cursor: move;
}

@media (max-width: 599px) {
  .q-list {
    touch-action: pan-y;
  }
  .q-item {
    touch-action: pan-x pan-y;
  }
}
</style>