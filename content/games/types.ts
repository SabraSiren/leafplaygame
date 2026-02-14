export interface GameItem {
  id: string;
  slug: string;
  title: string;
  mediaSrc: string;
  /** URL страницы приложения в магазине (Google Play и т.д.). Задаётся в файле игры в content/games/<slug>.ts */
  storeUrl?: string;
  /** Путь к иконке магазина (например, /icons/play-store.svg). Задаётся в content/games/<slug>.ts */
  storeIconSrc?: string;
}
