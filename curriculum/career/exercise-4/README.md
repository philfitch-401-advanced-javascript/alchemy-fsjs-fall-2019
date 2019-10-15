# Oops - files

A friend has a bunch of files on their computer that they need to rename.

```sh
$ ls
0.txt   16.txt  22.txt  29.txt  35.txt  41.txt  48.txt  54.txt  60.txt  67.txt  73.txt  7.txt   86.txt  92.txt  99.txt
10.txt  17.txt  23.txt  2.txt   36.txt  42.txt  49.txt  55.txt  61.txt  68.txt  74.txt  80.txt  87.txt  93.txt  9.txt
11.txt  18.txt  24.txt  30.txt  37.txt  43.txt  4.txt   56.txt  62.txt  69.txt  75.txt  81.txt  88.txt  94.txt
12.txt  19.txt  25.txt  31.txt  38.txt  44.txt  50.txt  57.txt  63.txt  6.txt   76.txt  82.txt  89.txt  95.txt
13.txt  1.txt   26.txt  32.txt  39.txt  45.txt  51.txt  58.txt  64.txt  70.txt  77.txt  83.txt  8.txt   96.txt
14.txt  20.txt  27.txt  33.txt  3.txt   46.txt  52.txt  59.txt  65.txt  71.txt  78.txt  84.txt  90.txt  97.txt
15.txt  21.txt  28.txt  34.txt  40.txt  47.txt  53.txt  5.txt   66.txt  72.txt  79.txt  85.txt  91.txt  98.txt
```

Each file contains a single word. **This word does not matter**.

```sh
$ cat 1.txt
shade
```

Your friend wants to rename each file so that the new file name takes the
following format: `${FILE_CONTENT}-${OLD_FILE_NUMBER}-${LAST_MODIFIED_DATETIME}`.
(e.g. `shade-1-2019-06-19T15:52:05.420Z`)

```sh
$ ls
dinosaur-19-2019-06-19T15:52:05.420Z  drake-66-2019-06-19T15:52:05.420Z         shade-8-2019-06-19T15:52:05.420Z
dinosaur-2-2019-06-19T15:52:05.420Z   drake-75-2019-06-19T15:52:05.420Z         shade-88-2019-06-19T15:52:05.420Z
dinosaur-30-2019-06-19T15:52:05.420Z  drake-80-2019-06-19T15:52:05.420Z         shade-94-2019-06-19T15:52:05.420Z
dinosaur-46-2019-06-19T15:52:05.420Z  drake-84-2019-06-19T15:52:05.420Z         weird-15-2019-06-19T15:52:05.420Z
dinosaur-52-2019-06-19T15:52:05.420Z  drake-9-2019-06-19T15:52:05.420Z          weird-16-2019-06-19T15:52:05.420Z
dinosaur-60-2019-06-19T15:52:05.420Z  drake-96-2019-06-19T15:52:05.420Z         weird-17-2019-06-19T15:52:05.420Z
dinosaur-69-2019-06-19T15:52:05.420Z  drake-98-2019-06-19T15:52:05.420Z         weird-39-2019-06-19T15:52:05.420Z
dinosaur-7-2019-06-19T15:52:05.420Z   elemental-1-2019-06-19T15:52:05.420Z      weird-40-2019-06-19T15:52:05.420Z
dinosaur-73-2019-06-19T15:52:05.420Z  elemental-14-2019-06-19T15:52:05.420Z     weird-5-2019-06-19T15:52:05.420Z
dinosaur-76-2019-06-19T15:52:05.420Z  elemental-29-2019-06-19T15:52:05.420Z     weird-56-2019-06-19T15:52:05.420Z
dinosaur-77-2019-06-19T15:52:05.420Z  elemental-33-2019-06-19T15:52:05.420Z     weird-65-2019-06-19T15:52:05.420Z
dinosaur-86-2019-06-19T15:52:05.420Z  elemental-4-2019-06-19T15:52:05.420Z      weird-72-2019-06-19T15:52:05.420Z
dinosaur-91-2019-06-19T15:52:05.420Z  elemental-43-2019-06-19T15:52:05.420Z     weird-74-2019-06-19T15:52:05.420Z
dinosaur-92-2019-06-19T15:52:05.420Z  elemental-59-2019-06-19T15:52:05.420Z     weird-87-2019-06-19T15:52:05.420Z
dinosaur-97-2019-06-19T15:52:05.420Z  elemental-93-2019-06-19T15:52:05.420Z     wizard-11-2019-06-19T15:52:05.420Z
dragon-18-2019-06-19T15:52:05.420Z    goblin-0-2019-06-19T15:52:05.420Z         wizard-13-2019-06-19T15:52:05.420Z
dragon-27-2019-06-19T15:52:05.420Z    goblin-20-2019-06-19T15:52:05.420Z        wizard-22-2019-06-19T15:52:05.420Z
dragon-32-2019-06-19T15:52:05.420Z    goblin-6-2019-06-19T15:52:05.420Z         wizard-24-2019-06-19T15:52:05.420Z
dragon-34-2019-06-19T15:52:05.420Z    goblin-64-2019-06-19T15:52:05.420Z        wizard-25-2019-06-19T15:52:05.420Z
dragon-48-2019-06-19T15:52:05.420Z    planeswalker-12-2019-06-19T15:52:05.420Z  wizard-35-2019-06-19T15:52:05.420Z
dragon-49-2019-06-19T15:52:05.420Z    planeswalker-31-2019-06-19T15:52:05.420Z  wizard-37-2019-06-19T15:52:05.420Z
dragon-53-2019-06-19T15:52:05.420Z    planeswalker-41-2019-06-19T15:52:05.420Z  wizard-42-2019-06-19T15:52:05.420Z
dragon-55-2019-06-19T15:52:05.420Z    planeswalker-57-2019-06-19T15:52:05.420Z  wizard-44-2019-06-19T15:52:05.420Z
dragon-61-2019-06-19T15:52:05.420Z    planeswalker-67-2019-06-19T15:52:05.420Z  wizard-45-2019-06-19T15:52:05.420Z
dragon-62-2019-06-19T15:52:05.420Z    planeswalker-82-2019-06-19T15:52:05.420Z  wizard-54-2019-06-19T15:52:05.420Z
dragon-68-2019-06-19T15:52:05.420Z    planeswalker-99-2019-06-19T15:52:05.420Z  wizard-63-2019-06-19T15:52:05.420Z
dragon-78-2019-06-19T15:52:05.420Z    shade-10-2019-06-19T15:52:05.420Z         wizard-70-2019-06-19T15:52:05.420Z
dragon-79-2019-06-19T15:52:05.420Z    shade-26-2019-06-19T15:52:05.420Z         wizard-71-2019-06-19T15:52:05.420Z
dragon-85-2019-06-19T15:52:05.420Z    shade-28-2019-06-19T15:52:05.420Z         wizard-83-2019-06-19T15:52:05.420Z
drake-21-2019-06-19T15:52:05.420Z     shade-3-2019-06-19T15:52:05.420Z          wizard-89-2019-06-19T15:52:05.420Z
drake-23-2019-06-19T15:52:05.420Z     shade-38-2019-06-19T15:52:05.420Z         wizard-90-2019-06-19T15:52:05.420Z
drake-36-2019-06-19T15:52:05.420Z     shade-51-2019-06-19T15:52:05.420Z         wizard-95-2019-06-19T15:52:05.420Z
drake-47-2019-06-19T15:52:05.420Z     shade-58-2019-06-19T15:52:05.420Z
drake-50-2019-06-19T15:52:05.420Z     shade-81-2019-06-19T15:52:05.420Z
```

Can you help your friend?

## Steps

* design a solution (in english what do you need to do)
* break down the problem into smaller chunks
* start working on chunks
  * define an outcome (how do you know when the chunk is complete)
  * define a validation (write a test)
  * write code
  * validate code (test passes)
  * commit
  * read code and refactor
  * commit
  * repeat for next chunk

## Rubric **10pts**

* Followed Steps *5pts*
* Meaningful Tests: *2pt*
* Clean Code: *2pt*
* It Works: *1pt*
