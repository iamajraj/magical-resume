import Template1 from '../components/templates/Template1';
import Template2 from '../components/templates/Template2';
import Template3 from '../components/templates/Template3';
import Template4 from '../components/templates/Template4';
import Template5 from '../components/templates/Template5';

export const templatesIds = [1, 2, 3, 4, 5];

export function getTemplate(id: number) {
  switch (id) {
    case 1:
      return Template1;
    case 2:
      return Template2;
    case 3:
      return Template3;
    case 4:
      return Template4;
    case 5:
      return Template5;
    default:
      return null;
  }
}
