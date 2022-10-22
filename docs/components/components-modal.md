# Modal

## Basic Modal

```blade
<!-- resources/views/components/modal.blade.php -->
@props(['open' => false])

<div x-data="{
    open: @js($open),
    hide() { this.open = false },
    show() { this.open = true },
    whenOpen(func) { if (this.open) $nextTick(func) },
}">
    <div
        x-on:click="show()"
        x-on:keyup.escape="close()"
    >
        {{ $trigger }}
    </div>
    <template x-teleport="body">
        <!-- Background: You can customize the class specially when you are not using tailwindcss.
                         This class here places the content in center. -->
        <div
            class="fixed inset-0 flex h-full w-full items-center justify-center backdrop-blur backdrop-brightness-90"
            x-show="open"
            x-on:click.self="hide()"
            x-on:keyup.escape="hide()"
            x-transition.scale.out.duration.200ms
            x-transition.scale.in.duration.200ms
        >
            {{ $content }}
        </div>
    </template>
</div>
```

### Component Properties

- `open` - Defaults to `false`.

### Available Functions

- `show()` - Opens the modal.
- `hide()` - Oloses the modal.

    Can be used when there is a cancel or close button, for example:
    ```blade
    <a href="#" x-on:click.prevent="hide()"> Cancel </a>
    ```
- `whenOpen(func)` - Function is executed when the modal is open.

    Useful when you want the input to focus when the modal is opened, for example:
    ```blade
    <input type="text" x-effect="whenOpen(() => $el.focus())" />
    ```

### Example Usage

```blade
<x-modal>
    <x-slot name="trigger">
        <button type="button">
            Trigger Button
        </button>
    </x-slot>
    <x-slot name="content">
        Hello World
    </x-slot>
</x-modal>
```

## Modal With Explicit Location

TODO
