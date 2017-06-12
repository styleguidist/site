import s from './SearchBox.pcss';

export default function Search() {
	return (
		<div class={s.searchboxHolder}>
			<svg width="40" height="40" viewBox="0 0 40 40" onclick="this.parentNode.childNodes[1].childNodes[0].focus()" class={s.searchboxIcon}><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.33 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.808 29.012zm-10.427.627c7.32 0 13.26-5.94 13.26-13.26 0-7.325-5.94-13.26-13.26-13.26-7.325 0-13.26 5.935-13.26 13.26 0 7.32 5.935 13.26 13.26 13.26z" fill-rule="evenodd" class={s.searchboxIconPath}/></svg>
			<input type="search" id="searchbox" placeholder="Search the doc" class={s.searchboxElement + " searchbox_input"} />
		</div>
	);
}
