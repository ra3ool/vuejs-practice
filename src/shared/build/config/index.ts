import vue from '@vitejs/plugin-vue';
import createAutoImport from './auto-import.config';
import createComponents from './components.config';

export function createVitePlugins() {
  return [vue(), createAutoImport, createComponents];
}
