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

### Available Functions

- `hide()` - closes the modal.
- `show()` - opens the modal.
- `whenOpen(func)` - function is executed when the modal is open, useful when the modal has a form and you want it to focus on the input when the modal is opened for example `whenOpen(()=> $el.focus())`.

### Usage examples

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

```blade
<x-modal :open="$errors->create->any()">
    <x-slot name="trigger">
        <x-primary-button type="button">
            Create Position
        </x-primary-button>
    </x-slot>
    <x-slot name="content">
        <div class="w-full max-w-lg rounded-md border bg-white px-4 py-6 shadow-md">
            <span class="text-2xl font-semibold">Create Position</span>
            <div class="mt-4">
                <form
                    action="{{ route('admin.positions.store') }}"
                    method="post"
                >
                    @csrf
                    <div>
                        <x-input-label
                            for="name"
                            value="Name"
                        />
                        <x-text-input
                            class="mt-1 block w-full"
                            id="name"
                            name="name"
                            type="text"
                            value="{{ old('name') }}"
                            required
                            placeholder="Position Name"
                            autocomplete="off"
                            x-effect="whenOpen(() => $el.focus())"
                        />
                        <x-input-error
                            class="mt-2"
                            :messages="$errors->create->get('name')"
                        />
                    </div>
                    <div class="mt-4 flex items-center justify-end gap-2">
                        <a
                            class="inline-flex items-center rounded-md border border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-widest ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring active:bg-gray-400 disabled:opacity-25"
                            href="#"
                            x-on:click.prevent="hide()"
                        >
                            Cancel
                        </a>
                        <x-primary-button type="submit">
                            Create
                        </x-primary-button>
                    </div>
                </form>
            </div>
        </div>
    </x-slot>
</x-modal>
```

## Modal With Explicit Location

TODO
