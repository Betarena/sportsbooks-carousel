<script>
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let closeOnClick = false;
  export let disabled = false;

  let isOpen = false;
  let dropdownRef;
  let hostRef;

  let innerHeight;
  let innerWidth;
  let maxHeight = "auto";
  let dropdownTop = "calc(100% + 4px)";
  let dropdownLeft = "0px";

  const dispatch = createEventDispatcher();

  const toggle = (state = !isOpen) => {
    isOpen = disabled ? false : state;
    dispatch(isOpen ? "open" : "close", null);
  };
  const close = () => {
    if (isOpen) toggle(false);
  };

  $: {
    if (dropdownRef && hostRef) {
      const { height, width } = dropdownRef.getBoundingClientRect();
      const { top, left, height: hostHeight } = hostRef.getBoundingClientRect();

      maxHeight = height > innerHeight ? innerHeight : height;
      if (top + hostHeight + maxHeight > innerHeight) {
        dropdownTop = `${innerHeight - maxHeight - top}px`;
      } else if (top + hostHeight + height < innerHeight) {
        dropdownTop = "calc(100% + 4px)";
      }
      /*
      if (left + width > innerWidth) {
        dropdownLeft = `${innerWidth - left - width}px`;
      } else if (left + width < innerWidth) {
        dropdownLeft = "0px";
      }*/
    }
  }
</script>

<div
  on:click|stopPropagation={() => toggle()}
  class={`host ${$$props.class || ""}`}
  bind:this={hostRef}
>
  <slot />
  <div class="dropdownContainer">
    {#if isOpen}
      <div
        style={`top:${dropdownTop}; left:${dropdownLeft}`}
        class="aa-dropdown"
        transition:slide|local={{ duration: 200 }}
      >
        <div class="blackTopDrop" />
        <div
          bind:this={dropdownRef}
          style={maxHeight ? `max-height:${maxHeight}px; ` : ""}
          on:click|stopPropagation={closeOnClick ? close : undefined}
        >
          <slot name="dropdown" />
        </div>
      </div>
    {/if}
  </div>
</div>
<svelte:body on:click={close} />
<svelte:window bind:innerHeight bind:innerWidth />

<style>
  .dropdownContainer {
    max-height: 0;
    overflow: visible;
  }

  .host {
    display: inline-block;
    position: relative;
  }

  .aa-dropdown {
    z-index: 10;
    position: absolute;
    margin-top: 0px;
    margin-left: -150px;
    top: 100%;
    min-width: 100%;
    width: 300px;
    /* padding: 8px; */
    border-radius: 8px;
    box-shadow: 3px 3px 18px 0 rgba(54, 71, 79, 0.2);
    background-color: #4b4b4b;
    overflow: visible;
    box-sizing: border-box;
  }

  .blackTopDrop {
    background-color: black;
    height: 40px;
    border-radius: 8px 8px 0px 0px;
  }
</style>
