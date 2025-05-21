import { TagEditorProps } from "@cloudscape-design/components";
import { DateRangePickerProps } from "@cloudscape-design/components/date-range-picker";

export const CodeEditorI18nStrings = {
  loadingState: "Loading code editor",
  errorState: "There was an error loading the code editor.",
  errorStateRecovery: "Retry",
  editorGroupAriaLabel: "Code editor",
  statusBarGroupAriaLabel: "Status bar",
  cursorPosition: (row: unknown, column: unknown) => `Ln ${row}, Col ${column}`,
  errorsTab: "Errors",
  warningsTab: "Warnings",
  preferencesButtonAriaLabel: "Preferences",
  paneCloseButtonAriaLabel: "Close",
  preferencesModalHeader: "Preferences",
  preferencesModalCancel: "Cancel",
  preferencesModalConfirm: "Confirm",
  preferencesModalWrapLines: "Wrap lines",
  preferencesModalTheme: "Theme",
  preferencesModalLightThemes: "Light themes",
  preferencesModalDarkThemes: "Dark themes",
};

export const DateRangePickerI18nStrings: DateRangePickerProps.I18nStrings = {
  todayAriaLabel: "Today",
  nextMonthAriaLabel: "Next month",
  previousMonthAriaLabel: "Previous month",
  customRelativeRangeDurationLabel: "Duration",
  customRelativeRangeDurationPlaceholder: "Enter duration",
  customRelativeRangeOptionLabel: "Custom range",
  customRelativeRangeOptionDescription: "Set a custom range in the past",
  customRelativeRangeUnitLabel: "Unit of time",
  formatRelativeRange: (e) => {
    const t = 1 === e.amount ? e.unit : `${e.unit}s`;
    return `Last ${e.amount} ${t}`;
  },
  formatUnit: (e: string, t: number) => (1 === t ? e : `${e}s`),
  dateTimeConstraintText: "Range must be between 6 and 30 days. Use 24 hour format.",
  relativeModeTitle: "Relative range",
  absoluteModeTitle: "Absolute range",
  relativeRangeSelectionHeading: "Choose a range",
  startDateLabel: "Start date",
  endDateLabel: "End date",
  startTimeLabel: "Start time",
  endTimeLabel: "End time",
  clearButtonLabel: "Clear and dismiss",
  cancelButtonLabel: "Cancel",
  applyButtonLabel: "Apply",
};

export const tagEditorI18nStrings: TagEditorProps.I18nStrings = {
  addButton: "Add tag",
  awsPrefixError: "AWS prefix is not allowed",
  clearAriaLabel: "Clear all tags",
  duplicateKeyError: "Duplicate key",
  emptyKeyError: "Key cannot be empty",
  emptyTags: "No tags added yet",
  enteredKeyLabel: (enteredText) => `Key: ${enteredText}`,
  enteredValueLabel: (enteredText) => `Value: ${enteredText}`,
  errorIconAriaLabel: "Error",
  invalidKeyError: "Invalid key",
  invalidValueError: "Invalid value",
  itemRemovedAriaLive: "Tag removed",
  keyHeader: "Key",
  keyPlaceholder: "Enter key",
  keySuggestion: "Suggested keys",
  keysSuggestionError: "Error loading key suggestions",
  keysSuggestionLoading: "Loading key suggestions",
  loading: "Loading...",
  maxKeyCharLengthError: "Key is too long (max {length} characters)", // Use {length} as a placeholder
  maxValueCharLengthError: "Value is too long (max {length} characters)", // Use {length} as a placeholder
  optional: "(optional)",
  removeButton: "Remove",
  removeButtonAriaLabel: (item) => `Remove tag ${item.key}=${item.value}`,
  tagLimit: (availableTags, tagLimit) =>
    availableTags === tagLimit
      ? `You can add up to ${tagLimit} tags.`
      : availableTags === 1
        ? "You can add up to 1 more tag."
        : `You can add up to ${availableTags} more tags.`,
  tagLimitExceeded: (tagLimit) => `You can add a maximum of ${tagLimit} tags.`,
  tagLimitReached: (tagLimit) => `You have reached the maximum of ${tagLimit} tags.`,
  tooManyKeysSuggestion: "Too many key suggestions",
  tooManyValuesSuggestion: "Too many value suggestions",
  undoButton: "Undo",
  undoPrompt: "Tag change undone",
  valueHeader: "Value",
  valuePlaceholder: "Enter value",
  valueSuggestion: "Suggested values",
  valuesSuggestionError: "Error loading value suggestions",
  valuesSuggestionLoading: "Loading value suggestions",
};

export default tagEditorI18nStrings;
