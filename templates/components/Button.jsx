import component from 'tamia/lib/components/component';
import s from './Button.pcss';

export default component($ => [s.button, $.primary && s.isPrimary], 'a');
