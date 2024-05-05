export interface IFavoriteButton {
  /**
   * Variables that sets wheter the button is in a favorite state or not.
   */
  isFavorite: boolean;
  /**
   * Function that is called when the button is clicked.
   */
  onClick: () => void;
}
