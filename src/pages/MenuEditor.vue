<template>
  <q-page padding class="menu-editor">
    <h1 class="text-2xl font-bold mb-4">Menu Configuration</h1>
    <q-btn color="primary" class="mb-4" @click="showAddCategoryDialog = true">Add Category</q-btn>
    <q-dialog v-model="showAddCategoryDialog" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6">Add New Category</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="newCategoryName" label="Category Name" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" v-close-popup @click="resetNewCategory" />
          <q-btn flat label="Add" color="primary" @click="addCategory" :disable="!newCategoryName" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div v-for="(category, categoryIndex) in categories" :key="category.categoryId" class="mb-8" :id="`category-${category.categoryId}`">
      <div class="flex items-center mb-2">
        <div class="w-1/12 flex flex-col items-center justify-center">
          <q-btn flat dense size="sm" icon="arrow_upward" color="primary" @click="moveCategoryUp(categoryIndex)" :disable="categoryIndex === 0">
        <q-tooltip>Move category up</q-tooltip>
      </q-btn>
      <div class="text-sm font-medium">{{ category.sortOrder }}</div>
      <q-btn flat dense size="sm" icon="arrow_downward" color="primary" @click="moveCategoryDown(categoryIndex)" :disable="categoryIndex === categories.length - 1">
        <q-tooltip>Move category down</q-tooltip>
      </q-btn>
        </div>
        <div class="w-11/12 px-2 flex items-center">
           <div class="flex-1">
          <div class="text-sm font-medium">Category Name</div>
          <q-input class="custom-input" v-model="category.name" dense @change="markCategoryAsChanged(category)" color="primary"  />
          </div>
          <div class="flex items-center">
          <q-toggle v-model="category.isActive" @update:model-value="markCategoryAsChanged(category)" color="primary" />
          <q-btn flat round dense icon="close" color="primary" @click="confirmRemoveCategory(category)">
              <q-tooltip>Delete category</q-tooltip>
            </q-btn>
          </div>
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
                  :src="element.photoUrl || ''"
                  style="width: 50px; height: 50px;"
                  fit="cover"
                   spinner-color="primary"
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
                <div>
                <q-toggle
                  v-model="element.isActive"
                  @update:model-value="updateMenuItem(element)"
                >
                  <q-tooltip>Toggle item availability</q-tooltip>
                </q-toggle>
                <q-btn flat round color="primary" icon="close" @click="confirmRemoveMenuItem(element)">
  <q-tooltip>Delete item</q-tooltip>
</q-btn></div>
                <q-btn color="primary" label="Edit" @click="editMenuItem(element)" class="text-base" style="margin-right: 1rem" />
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
            <q-img :src="editedItem.photoUrl" style="max-width: 200px; max-height: 200px;"  spinner-color="primary" />
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

    <EditPhotoFrame
    v-model="cropperDialogOpen"
    :photo="cropperImg"
    @cropped-image="handleCroppedImage"
    @clear-photo="clearPhoto"
  />

    <q-page-sticky position="bottom-right" :offset="[18, 50]">
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
import { ref, computed, nextTick, onMounted, watch } from 'vue';
import { useMenuStore } from '../stores/menuStore';
import { MenuItem, Category } from '../interfaces/Menu';
import draggable from 'vuedraggable';
import { useQuasar } from 'quasar';
import { onBeforeRouteLeave } from 'vue-router';
import EditPhotoFrame from '@/components/EditPhotoFrame.vue';
import { uploadImage } from '../api/MosPosApi';

const $q = useQuasar();
const menuStore = useMenuStore();

const categories = computed(() => menuStore.categories);

const localEditedItems = ref<{
  categories: Record<number, Partial<Category>>,
  menuItems: Record<number, Partial<MenuItem>>
}>({
  categories: {},
  menuItems: {}
});

const hasChanges = computed(() => 
  Object.keys(localEditedItems.value.categories).length > 0 || 
  Object.keys(localEditedItems.value.menuItems).length > 0
);


watch(categories, (newCategories) => {
  newCategories.forEach(category => {
    watch(() => category.name, (newName) => {
      if (newName !== menuStore.getOriginalCategory(category.categoryId)?.name) {
        localEditedItems.value.categories[category.categoryId] = {
          ...localEditedItems.value.categories[category.categoryId],
          name: newName
        };
      }
    });

    watch(() => category.menuItems, (newItems) => {
      newItems.forEach(item => {
        watch(() => item, (newItem) => {
          if (JSON.stringify(newItem) !== JSON.stringify(menuStore.getOriginalMenuItem(item.menuItemId))) {
            localEditedItems.value.menuItems[item.menuItemId] = {
              ...localEditedItems.value.menuItems[item.menuItemId],
              ...newItem
            };
          }
        }, { deep: true });
      });
    }, { deep: true });
  });
}, { deep: true });

const editDialog = ref(false);
const editedItem = ref<MenuItem>({} as MenuItem);
const isNewItem = ref(false);
const isSaving = ref(false);
const cropperDialogOpen = ref(false);
const cropperImg = ref('');
const tempImageUrl = ref('');

const fileInput = ref<HTMLInputElement | null>(null);

// const touchStartY = ref(0);
// const touchEndY = ref(0);
// const isSwiping = ref(false);
// const swipeThreshold = 10; // pixels


onMounted(async () => {
  try {
    await menuStore.fetchAllMenus();
    sortAllMenuItems();
  } catch (error) {
    console.error('Failed to fetch orders:', error);
  }
});

const sortAllMenuItems = () => {
  // 檢查 categories 是否為空或未定義
  if (!categories.value || categories.value.length === 0) {
    console.warn('No categories to sort');
    return;
  }

  // 遍歷每個 category 並排序其 menuItems
  categories.value.forEach(category => {
    if (Array.isArray(category.menuItems)) {
      // 只有在 menuItems 是陣列時才進行排序
      category.menuItems.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
    }
  });

  // 對 categories 進行排序
  categories.value.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
};




// const handleTouchStart = (event: TouchEvent) => {
//   touchStartY.value = event.touches[0].clientY;
// };

// const handleTouchMove = (event: TouchEvent) => {
//   touchEndY.value = event.touches[0].clientY;
//   const deltaY = touchEndY.value - touchStartY.value;

//   if (Math.abs(deltaY) > swipeThreshold) {
//     isSwiping.value = true;
//   }

//   if (isSwiping.value) {
//     event.stopPropagation();
//   }
// };

// const handleTouchEnd = (event: TouchEvent) => {
//   if (!isSwiping.value) {
//     const input = event.target as HTMLInputElement;
//     input.focus();
//   }
//   isSwiping.value = false;
// };

const confirmRemoveMenuItem = (item: MenuItem) => {
  $q.dialog({
    title: 'Confirm Deletion',
    message: `Are you sure you want to delete "${item.name}"?`,
    persistent: true,
    ok: {
      color: 'negative',
      label: 'Delete'
    },
    cancel: {
      flat:true,
      color: 'white',
      textColor: 'black',
      label: 'Cancel'
    }
  }).onOk(() => {
    removeMenuItem(item);
  });
};
const removeMenuItem = async (item: MenuItem) => {
  try {
    await menuStore.removeMenuItem(item);
    await nextTick();
    $q.notify({
      color: 'positive',
      message: 'Item removed successfully'
    });
  } catch (error) {
    console.error('Error removing menu item:', error);
    $q.notify({
      color: 'negative',
      message: 'Failed to remove item. Please try again.'
    });
  }
};
const editMenuItem = (item: MenuItem) => {
  editedItem.value = { ...item, categoryId: item.categoryId };
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

const openImageUpload = () => {
  fileInput.value?.click();
};

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  //宣告為target 為 event的target 是input element
  const file = target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      //Once the file is read, the onload event is triggered, event is the filereaderprogress, which I want it's result
      cropperImg.value = event.target?.result as string;//先丟入crooper裡，v-bind
      cropperDialogOpen.value = true;
    };
    reader.readAsDataURL(file); //顯示預覽圖
  }
};
const handleCroppedImage = async (imageBlob: Blob) => {
  try {
    isSaving.value=true;
    const file = new File([imageBlob], 'image.jpeg', { type: 'image/jpeg' });
    const imageUrl = await uploadImage(file);
    tempImageUrl.value = imageUrl;
    editedItem.value.photoUrl = imageUrl;
    cropperDialogOpen.value = false;
  } catch (error) {
    console.error('Error uploading image:', error);
    $q.notify({
      color: 'negative',
      message: 'Failed to upload image. Please try again.'
    });
  }
  finally{
    isSaving.value=false;
  }
};
const clearPhoto = () => {
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};
const saveMenuItem = async () => {
  try {
    isSaving.value = true;

    if (tempImageUrl.value) {
      editedItem.value.photoUrl = tempImageUrl.value;
    }

    console.log('Saving item with categoryId:', editedItem.value.categoryId);
    console.log('Edited item:', editedItem.value);

    let savedItem: MenuItem;
    if (isNewItem.value) {
      savedItem = await menuStore.addMenuItem(editedItem.value);
    } else {
      savedItem = await menuStore.updateMenuItem(editedItem.value);
    }
    Object.assign(editedItem.value, savedItem);
    tempImageUrl.value = '';
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
  tempImageUrl.value = '';
  if (fileInput.value) {
    fileInput.value.value = '';
  }
};

const markCategoryAsChanged = (category: Category) => {
  localEditedItems.value.categories[category.categoryId] = {
    ...localEditedItems.value.categories[category.categoryId],
    name: category.name,
    isActive: category.isActive
  };};


const updateItemSortOrder = (category: Category) => {
  category.menuItems.forEach((item, index) => {
    if (item.sortOrder !== index + 1) {
      localEditedItems.value.menuItems[item.menuItemId] = {
        ...localEditedItems.value.menuItems[item.menuItemId],
        sortOrder: index + 1
      };
    }
  });
};

const updateMenuItem = (item: MenuItem) => {
  localEditedItems.value.menuItems[item.menuItemId] = {
    ...localEditedItems.value.menuItems[item.menuItemId],
    isActive: item.isActive
  };
};

const saveAllChanges = async () => {
  try {
    const updatedCategories = Object.entries(localEditedItems.value.categories).map(([categoryId, changes]) => {
      const category = categories.value.find(c => c.categoryId === Number(categoryId));
      if (!category) {
        throw new Error(`Category with id ${categoryId} not found`);
      }
      return {
        categoryId: Number(categoryId),
        name: changes.name ?? category.name,
        isActive: changes.isActive??category.isActive,
        sortOrder: changes.sortOrder ?? category.sortOrder,
        menuConfigurationId: category.menuConfigurationId,
      };
    });

    const updatedMenuItems = Object.entries(localEditedItems.value.menuItems).map(([menuItemId, changes]) => {
    const menuItem = categories.value.flatMap(category => category.menuItems).find(mi => mi.menuItemId === Number(menuItemId));
    if (!menuItem) {
      throw new Error(`MenuItem with id ${menuItemId} not found`);
    }
    return {
      menuItemId: Number(menuItemId),
      name: changes.name ?? menuItem.name,
      description: changes.description ?? menuItem.description,
      price: changes.price ?? menuItem.price,
      isActive: changes.isActive ?? menuItem.isActive,
      photoUrl: changes.photoUrl ?? menuItem.photoUrl,
      sortOrder: changes.sortOrder ?? menuItem.sortOrder,
      categoryId: changes.categoryId ?? menuItem.categoryId,
    };
  });

    await menuStore.saveAllChanges({
      updatedCategories,
      updatedMenuItems,
    });

    localEditedItems.value = { categories: {}, menuItems: {} };

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
  }
};

const moveCategoryUp = (index: number) => {
  if (index > 0) {
    swapCategories(index, index - 1);
  }
};

const moveCategoryDown = (index: number) => {
  if (index < categories.value.length - 1) {
    swapCategories(index, index + 1);
  }
};

const swapCategories = (index1: number, index2: number) => {
  const temp = categories.value[index1];
  categories.value[index1] = categories.value[index2];
  categories.value[index2] = temp;

  categories.value[index1].sortOrder = index1 + 1;
  categories.value[index2].sortOrder = index2 + 1;

  localEditedItems.value.categories[categories.value[index1].categoryId] = {
    ...localEditedItems.value.categories[categories.value[index1].categoryId],
    sortOrder: index1 + 1
  };
  localEditedItems.value.categories[categories.value[index2].categoryId] = {
    ...localEditedItems.value.categories[categories.value[index2].categoryId],
    sortOrder: index2 + 1
  };
};

const confirmRemoveCategory = (category: Category) => {
  $q.dialog({
    title: 'Confirm Deletion',
    message: `Are you sure you want to delete the category "${category.name}"?`,
    persistent: true,
    ok: {
      color: 'negative',
      label: 'Delete'
    },
    cancel: {
      flat:true,
      color: 'white',
      textColor: 'black',
      label: 'Cancel'
    }
  }).onOk(() => {
    removeCategory(category);
  });
};

const removeCategory = async (category: Category) => {
  try {
    await menuStore.removeCategory(category);

    await nextTick();
    $q.notify({
      color: 'positive',
      message: 'Category removed successfully'
    });
  } catch (error) {
    console.error('Error removing category:', error);
    $q.notify({
      color: 'negative',
      message: 'Failed to remove category. Please try again.'
    });
  }
};

const resetNewCategory = () => {
  newCategoryName.value = '';
};
const addCategory = async () => {
  if (!newCategoryName.value.trim()) {
    console.error('Category name cannot be empty!');
    return;
  }
  try {
    const  newCategory={
    name: newCategoryName.value,  isActive: true,  sortOrder: 0,  menuItems: [],menuConfigurationId: categories.value[0].menuConfigurationId}
    const newCategoryReturn = await menuStore.addCategory(newCategory);
    categories.value.push(newCategoryReturn)
    categories.value.forEach(category => {
      localEditedItems.value.categories[category.categoryId] = {
        ...category, // 將 category 本身的屬性加進去
      };
    });
    Object.keys(localEditedItems.value.categories).forEach(categoryId => {
      const category = localEditedItems.value.categories[Number(categoryId)];
      if (category) {
        category.sortOrder = (category.sortOrder || 0) + 1; // Increment sortOrder safely
      }
    });
    saveAllChanges();
    sortAllMenuItems();
    showAddCategoryDialog.value = false;
    newCategoryName.value = '';
    console.log('Category added successfully!');
  } catch (error) {
    console.error('Failed to add category:', error);
  }
};

const showAddCategoryDialog = ref(false);
const newCategoryName = ref('');

onBeforeRouteLeave((_to, _from, next) => {
  if (hasChanges.value) {
    $q.dialog({
      title: 'Unsaved Changes',
      message: 'You have unsaved changes. Do you want to save before leaving?',
      ok: {
        color:'secondary',
        label:'Save'},
      cancel: {
        color:'accent',
        label:'Discard'},
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

<style scoped lang="scss">
.menu-editor {
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
// .custom-input ::v-deep .q-field__native  {
//   color: $primary;
// }

@media (max-width: 599px) {
  .q-list {
    touch-action: pan-y;
  }
  .q-item {
    touch-action: pan-x pan-y;
  }
}
</style>