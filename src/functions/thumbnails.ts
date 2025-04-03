import { ZXInfoSearchResultHitScreen } from "../interface/zxinfo";

export const getThumbnailUrl = (screens: ZXInfoSearchResultHitScreen[]) => {
    let result = '';
    if (screens.length > 0) {
        result = `https://zxinfo.dk/media/${screens[0].url}`
    } else {
        result = 'https://zxinfo.dk/media/images/placeholder.png';
    }
    return result;

}