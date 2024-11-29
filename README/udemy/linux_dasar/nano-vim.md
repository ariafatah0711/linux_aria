# GNU nano Cheatsheet

| **Category**      | **Keystroke**      | **Function**                                  |
|-------------------|--------------------|----------------------------------------------|
| **File Handling**  | `Ctrl+S`           | Save current file                            |
|                   | `Ctrl+O`           | Offer to write file ("Save as")              |
|                   | `Ctrl+R`           | Insert a file into current one               |
|                   | `Ctrl+X`           | Close buffer, exit from nano                 |
| **Editing**        | `Ctrl+K`           | Cut current line into cutbuffer              |
|                   | `Alt+6`            | Copy current line into cutbuffer             |
|                   | `Ctrl+U`           | Paste contents of cutbuffer                  |
|                   | `Alt+T`            | Cut until end of buffer                      |
|                   | `Ctrl+]`           | Complete current word                        |
|                   | `Alt+3`            | Comment/uncomment line/region                |
|                   | `Alt+U`            | Undo last action                             |
|                   | `Alt+E`            | Redo last undone action                      |
| **Search & Replace**| `Ctrl+Q`          | Start backward search                        |
|                   | `Ctrl+W`           | Start forward search                         |
|                   | `Alt+Q`            | Find next occurrence backward                |
|                   | `Alt+W`            | Find next occurrence forward                 |
|                   | `Alt+R`            | Start a replacing session                    |
| **Deletion**       | `Ctrl+H`           | Delete character before cursor               |
|                   | `Ctrl+D`           | Delete character under cursor                |
|                   | `Alt+Bsp`          | Delete word to the left                      |
|                   | `Ctrl+Del`         | Delete word to the right                     |
|                   | `Alt+Del`          | Delete current line                          |
| **Operations**     | `Ctrl+T`           | Execute some command                         |
|                   | `Ctrl+J`           | Justify paragraph or region                  |
|                   | `Alt+J`            | Justify entire buffer                        |
|                   | `Alt+B`            | Run a syntax check                           |
|                   | `Alt+F`            | Run a formatter/fixer/arranger               |
|                   | `Alt+:`            | Start/stop recording of macro                |
|                   | `Alt+;`            | Replay macro                                 |
| **Moving Around**  | `Ctrl+B`           | Move one character backward                  |
|                   | `Ctrl+F`           | Move one character forward                   |
|                   | `Ctrl+←`           | Move one word backward                       |
|                   | `Ctrl+→`           | Move one word forward                        |
|                   | `Ctrl+A`           | Move to start of line                        |
|                   | `Ctrl+E`           | Move to end of line                          |
|                   | `Ctrl+P`           | Move one line up                             |
|                   | `Ctrl+N`           | Move one line down                           |
|                   | `Ctrl+↑`           | Move to previous block                       |
|                   | `Ctrl+↓`           | Move to next block                           |
|                   | `Ctrl+Y`           | Move one page up                             |
|                   | `Ctrl+V`           | Move one page down                           |
|                   | `Alt+\`            | Move to top of buffer                        |
|                   | `Alt+/`            | Move to end of buffer                        |
| **Special Movement**| `Alt+G`           | Go to specified line                         |
|                   | `Alt+]`            | Go to complementary bracket                  |
|                   | `Alt+↑`            | Scroll viewport up                           |
|                   | `Alt+↓`            | Scroll viewport down                         |
|                   | `Alt+<`            | Switch to preceding buffer                   |
|                   | `Alt+>`            | Switch to succeeding buffer                  |
| **Information**    | `Ctrl+C`           | Report cursor position                       |
|                   | `Alt+D`            | Report line/word/character count             |
|                   | `Ctrl+G`           | Display help text                            |
| **Various**        | `Alt+A`            | Turn the mark on/off                         |
|                   | `Tab`              | Indent marked region                         |
|                   | `Shift+Tab`        | Unindent marked region                       |
|                   | `Alt+V`            | Enter next keystroke verbatim                |
|                   | `Alt+N`            | Turn line numbers on/off                     |
|                   | `Alt+P`            | Turn visible whitespace on/off               |
|                   | `Alt+X`            | Hide or unhide the help lines                |
|                   | `Ctrl+L`           | Refresh the screen                           |

# Vim Cheat Sheet

## Essentials

### Cursor Movement (Normal/Visual Mode)
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `h` / `l`           | Move left/right                                    |
| `j` / `k`           | Move down/up                                       |
| `w` / `b`           | Next/previous word                                 |
| `W` / `B`           | Next/previous word (space separated)               |
| `e` / `ge`          | Next/previous end of word                          |
| `0` / `$`           | Start/End of line                                  |
| `^`                 | First non-blank character of line                  |

## Editing Text
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `i` / `a`           | Insert mode at/after cursor                        |
| `I` / `A`           | Insert mode at the beginning/end of line           |
| `o` / `O`           | Add blank line below/above current line            |
| `Esc` or `Ctrl+[`   | Exit insert mode                                   |
| `d`                 | Delete                                             |
| `dd`                | Delete line                                        |
| `c`                 | Delete and enter insert mode                       |
| `cc`                | Delete line and enter insert mode                  |

## Operators (Also Work in Visual Mode)
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `d`                 | Delete to movement location                        |
| `c`                 | Delete to movement location, enter insert mode     |
| `y`                 | Copy to movement location                          |
| `>` / `<`           | Indent/Unindent one level                          |

## Marking Text (Visual Mode)
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `v`                 | Start visual mode                                  |
| `V`                 | Start linewise visual mode                         |
| `Ctrl+v`            | Start visual block mode                            |
| `Esc` or `Ctrl+[`   | Exit visual mode                                   |

## Clipboard
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `yy`                | Yank (copy) a line                                 |
| `p` / `P`           | Paste after/before cursor                          |
| `dd`                | Delete (cut) a line                                |
| `x` / `X`           | Delete current/previous character                  |
| `d` / `c`           | Copy deleted text                                  |

## Exiting
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `:w`                | Save file                                          |
| `:wq`               | Save and quit                                      |
| `:q`                | Quit (fails if unsaved changes)                    |
| `:q!`               | Quit and discard changes                           |

## Search/Replace
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `/pattern`          | Search forward for pattern                         |
| `?pattern`          | Search backward for pattern                        |
| `n` / `N`           | Repeat search forward/backward                     |
| `:%s/old/new/g`     | Replace all occurrences of `old` with `new`        |
| `:%s/old/new/gc`    | Replace all with confirmation                      |

## General
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `u`                 | Undo                                               |
| `Ctrl+r`            | Redo                                               |

---

## Advanced

### Cursor Movement
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `Ctrl+d` / `Ctrl+u` | Move down/up half a page                           |
| `}` / `{`           | Move forward/backward by paragraph                 |
| `gg` / `G`          | Go to top/bottom of the page                       |
| `:[num]`            | Go to specific line number                         |

### Character Search
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `f [char]` / `F [char]` | Move forward/backward to the given character    |
| `t [char]` / `T [char]` | Move before the given character                 |
| `;` / `,`           | Repeat search forward/backward                     |

### Editing Text
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `J`                 | Join current line with the next                    |
| `r [char]`          | Replace single character                           |

### File Tabs
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `:e filename`       | Edit a file                                        |
| `:tabe`             | Open a new tab                                     |
| `gt` / `gT`         | Go to the next/previous tab                        |

### Marks
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `m{a-z}`            | Set mark `{a-z}`                                   |
| `'{a-z}`            | Jump to the marked line                            |

### Text Objects
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `di(`               | Delete inside parentheses                          |

---

## Learn More
| Keystroke           | Description                                        |
|---------------------|----------------------------------------------------|
| `.`                 | Repeat last command                                |
| `Ctrl+r + 0`        | Insert last yanked text in insert/command mode     |
| `gv`                | Reselect last selected block                       |
| `%`                 | Jump between matching `()` or `{}`                 |
