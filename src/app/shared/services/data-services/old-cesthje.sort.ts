import { OldCeshtjeDto } from "../../sdk/models";

export function compareOldCeshtje(c1: OldCeshtjeDto, c2: OldCeshtjeDto) {
    const compare = c1.oldid - c1.oldid;

    if (compare > 0) {
        return 1;
    } else if (compare < 0) {
        return -1;
    } else {
        return 0;
    }
}