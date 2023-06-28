import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the sdt-jupyter-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'sdt-jupyter-theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension sdt-jupyter-theme is activated!');
    const style = 'sdt-jupyter-theme/index.css';

    manager.register({
      name: 'sdt-jupyter-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
