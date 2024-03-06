<template>
    <table>
        <thead>
            <slot name="tableHeader"></slot>
        </thead>
        <tbody>
            <slot name="tableBody"></slot>
        </tbody>
    </table>
</template>

<style lang="scss">
$table-border-color: rgba(8, 8, 185, 0.7);

$table-column-color: rgba(62, 62, 253, 0.7);
$table-column-border-color: rgba(62, 62, 253, 0.7);

$table-buttons-color: rgba(126, 126, 240, 0.7);
$table-buttons-color-hover: rgba(62, 62, 253, 0.65);

.table {
    width: 90%;
    margin-left: 5%;
    border: 3px solid $table-border-color;

    &-column {
        color: $table-column-color;
        border-left: 1px solid $table-column-border-color;
    }

    &-buttons {
        background-color: $table-buttons-color;
        border: none;
        border-radius: 3px;
        cursor: pointer;

        &:hover {
            background-color: $table-buttons-color-hover;
        }
    }
}
</style>