import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { preprocessMeltUI, sequence } from '@melt-ui/pp'

export default {
  preprocess: sequence[
	preprocess({postcss: true}),  preprocessMeltUI()
  ] ,
  kit: {
    adapter: adapter(),
    files: {
      routes: 'src/routes' 
  }
}
};
