import type { CmsConfig } from 'netlify-cms-core';
import type { Plugin } from 'vite';
import type { PreviewStyle } from './types';
export default function AdminDashboardPlugin({ config, previewStyles, }: {
    config: Omit<CmsConfig, 'load_config_file' | 'local_backend'>;
    previewStyles: PreviewStyle[];
}): Plugin;
