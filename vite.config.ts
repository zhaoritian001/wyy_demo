import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: { // 更改主题在这里
  //         'primary-color': '#52c41a',
  //         'link-color': '#1DA57A',
  //         'border-radius-base': '2px'
  //       },
  //       javascriptEnabled: true
  //     }
  //   }
  // }
})
