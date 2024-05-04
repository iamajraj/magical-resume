import Template3Editor from '../components/editors/Template3Editor';

export const templatesIds = [1, 2, 3, 4, 5];

export function getTemplateEditor(id: number) {
  switch (id) {
    case 3:
      return Template3Editor;
    default:
      return null;
  }
}
