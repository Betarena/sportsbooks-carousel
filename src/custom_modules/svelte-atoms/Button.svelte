<script>
  import { getEventsAction } from "./utils";
  import { current_component } from "svelte/internal";
  import Loader from "./Loader.svelte";
  import Icon from "./Icon.svelte";

  export let type = "filled";
  export let disabled = false;
  export let status = "primary";
  export let isLoading = false;
  export let iconLeft = null;
  export let iconRight = null;

  const events = getEventsAction(current_component);

  $: iconStatus = disabled ? "noactive" : type === "filled" ? "white" : status;
</script>

<button
  disabled={disabled || isLoading}
  use:events
  class={`aa-button ${type} ${disabled ? "disabled" : status} ${
    isLoading ? "loading" : ""
  } ${$$props.class || ""}`}
  style={$$props.style || ""}
>
  <span class="content">
    {#if isLoading}
      <Loader size={28} status={type === "filled" ? "white" : status} />
    {:else}
      {#if iconLeft}
        <Icon icon={iconLeft} status={iconStatus} />
      {/if}
      <span class="contentText">
        <slot />
      </span>
      {#if iconRight}
        <Icon icon={iconRight} status={iconStatus} />
      {/if}
    {/if}
  </span>
</button>

<style>
  .aa-button {
    margin-top: 0px;
    margin-left: 80px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background: #f5620f;
    box-shadow: 0px 3px 8px rgba(212, 84, 12, 0.32);
    border-radius: 0px 8px;
    width: 68px;
    height: 30px;
    overflow: visible;
    cursor: pointer;
    outline: none;
  }

  .aa-button:hover {
    background-color: white;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.32);
  }

  .contentText {
    padding: 0 8px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: white;
  }

  .contentText:hover {
    padding: 0 8px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #f5620f;
  }

  .loading {
    padding: 6px 16px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }

  .filled.primary:active {
    outline: none;
    border: none;
  }

  .filled.primary {
    outline: none;
    border: none;
  }

  /*
  .filled.primary {
    color: var(--palette-white);
    background: #f5620f;
    box-shadow: 3px 4px 17px 0 rgba(53, 142, 215, 0.3);
  }
  .filled.primary:focus,
  .filled.primary:hover {
    background: var(--palette-primary-2);
  }
  .filled.primary:active {
    box-shadow: inset 0 1px 2px 0 rgba(24, 100, 159, 0.55),
      0 0 2px 0 rgba(24, 100, 159, 0.55);
  }

  .filled.positive {
    color: var(--palette-white);
    background: var(--palette-positive-1);
    box-shadow: 3px 4px 17px 0 rgba(126, 211, 33, 0.55);
  }
  .filled.positive:focus,
  .filled.positive:hover {
    background: var(--palette-positive-2);
  }
  .filled.positive:active {
    box-shadow: inset 0 1px 2px 0 rgba(130, 141, 145, 0.55),
      0 0 2px 0 rgba(130, 141, 145, 0.55);
  }

  .filled.negative {
    color: var(--palette-white);
    background: var(--palette-negative-1);
    box-shadow: 3px 4px 17px 0 rgba(240, 21, 38, 0.3);
  }
  .filled.warning {
    color: var(--palette-white);
    background: var(--palette-warning-1);
    box-shadow: 3px 4px 17px 0 rgba(248, 197, 28, 0.3);
  }
  .filled.negative:focus,
  .filled.negative:hover {
    background: var(--palette-negative-2);
  }
  .filled.negative:active {
    box-shadow: inset 0 1px 2px 0 rgba(24, 100, 159, 0.55),
      0 0 2px 0 rgba(24, 100, 159, 0.55);
  }
  .filled.warning:active {
    box-shadow: inset 0 1px 2px 0 rgba(24, 100, 159, 0.55),
      0 0 2px 0 rgba(24, 100, 159, 0.55);
  }

  .filled.disabled {
    color: var(--palette-white);
    background: var(--palette-noactive-2);
    box-shadow: inset 0 1px 2px 0 rgba(130, 141, 145, 0.55),
      0 0 2px 0 rgba(130, 141, 145, 0.55);
    cursor: inherit;
  }

  .flat {
    box-shadow: 3px 4px 17px 0 rgba(0, 0, 0, 0.09);
    background: var(--palette-white);
  }
  .flat:active,
  .flat.disabled {
    box-shadow: inset 0 1px 2px 0 rgba(130, 141, 145, 0.55),
      0 0 2px 0 rgba(130, 141, 145, 0.55);
    cursor: inherit;
  }

  .flat.primary {
    color: var(--palette-primary-1);
  }
  .flat.primary:focus,
  .flat.primary:hover {
    color: var(--palette-primary-2);
  }
  .flat.positive {
    color: var(--palette-positive-1);
  }
  .flat.positive:focus,
  .flat.positive:hover {
    color: var(--palette-positive-2);
  }
  .flat.negative {
    color: var(--palette-negative-1);
  }
  .flat.negative:focus,
  .flat.negative:hover {
    color: var(--palette-negative-2);
  }
  .flat.warning {
    color: var(--palette-warning-1);
  }
  .flat.warning:focus,
  .flat.warning:hover {
    color: var(--palette-warning-1);
  }

  .empty {
    background: none;
    padding: 12px 0;
    min-width: auto;
    color: var(--palette-primary-1);
  }
  .empty:focus,
  .empty:hover {
    color: var(--palette-primary-2);
  }
  .empty.disabled {
    color: var(--palette-noactive-1);
  }
  .empty.disabled:focus,
  .empty.disabled:hover {
    color: var(--palette-noactive-1);
  }
  .empty.negative {
    color: var(--palette-negative-1);
  }
  .empty.negative:focus,
  .empty.negative:hover {
    color: var(--palette-negative-2);
  }
  .empty.warning {
    color: var(--palette-warning-1);
  }
  .empty.warning:focus,
  .empty.warning:hover {
    color: var(--palette-warning-1);
  }
  .empty.positive {
    color: var(--palette-positive-1);
  }
  .empty.positive:focus,
  .empty.positive:hover {
    color: var(--palette-positive-2);
  }*/
</style>
