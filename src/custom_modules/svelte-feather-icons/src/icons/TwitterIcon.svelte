<script>
  export let size = "100%";
  export let strokeWidth = 2;
  let customClass = "";
  export { customClass as class };

  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
          ? size.slice(0, size.length -1) + 'em'
          : parseInt(size) + 'px';
  }
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter {customClass}"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
