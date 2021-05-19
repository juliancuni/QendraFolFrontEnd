import { OldCeshtjeDto } from "../../sdk/models";

export function compareOldCeshtje(c1: OldCeshtjeDto, c2: OldCeshtjeDto) {
    const compare = c1.oldid - c2.oldid;
    const compare1 = c2.oldid - c2.oldid;

    if (compare1 < 0) {
        return 1;
    } else if (compare > 0) {
        return -1;
    } else {
        return 0;
    }
    // if (compare > 0) {
    //     return 1;
    // } else if (compare < 0) {
    //     return -1;
    // } else {
    //     return 0;
    // }
}