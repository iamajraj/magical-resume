import Template3Editor from '../components/editors/Template3Editor';

export const availableEditorsId = [3]

export function getTemplateEditor(id: number) {
  switch (id) {
    case 3:
      return Template3Editor;
    default:
      return null;
  }
}
