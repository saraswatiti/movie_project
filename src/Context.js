import React from "react";

const search_action = React.createContext();

export const SearchProvider = search_action.Provider;
export const SearchConsumer = search_action.Consumer;
