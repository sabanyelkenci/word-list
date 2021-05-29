import { data } from "../data.js";
import { updateList } from "../procedures/update-list.js";

/* --- import all listener files so they can attach to the DOM --- */

import "../listeners/sort-words.js";
import "../listeners/input-word.js";

/* --- any other code that executes when the document or window are ready --- */

// render the initial list
updateList(data.words);
