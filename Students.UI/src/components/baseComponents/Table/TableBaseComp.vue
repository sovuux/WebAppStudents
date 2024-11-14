<template>
  <table>
    <thead>
      <slot name="tableHeader" />
    </thead>
    <tbody>
      <slot name="tableBody" />
    </tbody>
  </table>
</template>

<style lang="scss">
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  &-column {
    padding: 12px 8px;
    border-bottom: 1px solid #e0e0e0;
  }

  &-header {
    background-color: #f5f5f5;
    font-weight: bold;
  }
}

:root {
  --button-color: #4CAF50;
  --button-hover-color: #45a049;
}

.table-buttons {
  background-color: var(--button-color);
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--button-hover-color);
  }

  &-icon {
    width: 16px;
    height: 16px;
  }
}

.table {
  tr:hover {
    background-color: #f5f5f5;
  }

  &-column.active {
    background-color: #e0e0e0;
  }
}

@media (max-width: 767px) {
  .table {
    font-size: 12px;

    &-column {
      padding: 8px 4px;
    }

    &-buttons {
      padding: 4px 8px;

      &-icon {
        width: 14px;
        height: 14px;
      }
    }
  }
}
</style>