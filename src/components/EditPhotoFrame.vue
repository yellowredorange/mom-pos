<template>
  <q-dialog v-model="frameOpen" persistent>
    <q-card v-if="frameOpen" class="wrap-card">
      <VuePictureCropper
        :boxStyle="{
          width: '100%',
          height: '100%',
          backgroundColor: '#f8f8f8',
          margin: 'auto',
          maxWidth: '500px',
          maxHeight: '500px',
        }"
        :img="props.photo"
        :options="{
          viewMode: 1,
          dragMode: 'move',
          aspectRatio: 1,
          minContainerWidth: 300,
          minContainerHeight: 300,
        }"
      />
      <div class="row q-pa-md">
        <q-btn class="cropping-btn" color="primary" @click="reset">
          Reset
        </q-btn>
        <q-space />
        <q-btn flat class="cropping-btn" color="primary" @click="clearFile">
          Cancel
        </q-btn>
        <q-btn class="cropping-btn" color="secondary" @click="getResult">
          UPLOAD
        </q-btn>
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import VuePictureCropper, { cropper } from 'vue-picture-cropper';
const props = defineProps<{
  photo: string;
}>();

const emit = defineEmits<{
  (e: 'cropped-image', blob: Blob): void;
  (e: 'update:modelValue', value: boolean): void;
  (e: 'clear-photo'): void;
}>();

const frameOpen = defineModel('modelValue', { type: Boolean });

const getResult = async () => {
  if (!cropper){
    return;
  }

  const blob = await cropper.getBlob();
  if (!blob) return;

  const webpBlob = await convertToJPG(blob);
  emit('cropped-image', webpBlob);
  emit('update:modelValue', false);
};

const convertToJPG = (blob: Blob): Promise<Blob> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      canvas.toBlob((jpgBlob) => {
        if (jpgBlob) {
          resolve(jpgBlob);
        }
      }, 'image/jpeg', 0.8);
    };
    const reader = new FileReader();
    reader.onload = () => {
      img.src = reader.result as string;
    };
    reader.readAsDataURL(blob);
  });
};

const reset = () => {
  if (cropper) {
    cropper.reset();
  }
};

const clearFile=()=>{
  emit('clear-photo');
  frameOpen.value = false;
}
</script>

<style scoped>
.cropping-btn {
  margin: 3px;
}

.wrap-card {
  width: 100%;
  max-width: 500px;
}
</style>
