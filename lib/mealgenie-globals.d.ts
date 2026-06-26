import type {} from './mealgenie-app';

declare global {
  interface Window {
    toggleBlog: () => void;
    showFavorites: () => void;
    toggleSettings: () => void;
    toggleLangMenu: () => void;
    toggleChatbot: () => void;
    toggleMute: () => void;
    sendChatbotMessage: () => void;
    startVoiceInput: () => void;
    setBgColor: (color: string) => void;
    saveSpoonacularKey: () => void;
    saveApiKey: () => void;
    toggleLeftoverMode: () => void;
    showAllMeals: () => void;
    backFromRecipe: () => void;
    setServings: (n: number) => void;
    showIngredients: () => void;
    showResults: (allowEmpty?: boolean) => void;
    generateRecipesFromSelection: () => void;
    openShareRecipe: () => void;
    openReportBug: () => void;
    openHangout: () => void;
    submitBlogPost: (type: string) => void;
    setLanguage: (code: string) => void;
    generateAndShow: (type: string) => void | Promise<void>;
    openRecipeFromResults: (id: number) => void;
    toggleIngredient: (id: string) => void;
    clearSelection: () => void;
    backFromAll: () => void;
    filterType: (type: string) => void;
    filterCuisine: (cuisine: string) => void;
    toggleFridgeIng: (id: string, btn?: HTMLElement) => void;
    openFridgeRecipe: (id: number) => void;
  }
}

export {};
