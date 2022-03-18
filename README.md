## Folder structure

Solutions are grouped by year and later inside folders labelled by day `day-<number>`. For instance the solution for day one for the year 2015 will be in folder `/2015/day-one` and `/2015/day-two` for the second day and so on.

For each day, inside the `inputs` folder, there are two files, `sample_input.txt` and `input.txt` which hold the input that we get from the questions. The file with `sample` prepended holds the sample input, and the other one holds the actual input. To choose when to use sample input or actual input, we use environment variable named `env`. Before running step 3 in [Running locally](#running-locally), run `export env=prod` to run aganist the atcual input and `export env=test` aganist the sample input.

There's a tool to help with scafolding the folder for you, learn more about it [here](#generating-solution-folders).

## Running locally

1. Install dependencies by running `$npm i` in the root folder.
1. Navigate to the problem you want to run.
1. Run the solution by running `$npx ts-node index.ts`

## Generating solution folders

From anywhere in the folder run

```bash
$npm run createSolutionFolder
```

The tool will ask you a number of questions. For instance, the year and day you are currently answering the question for.

![An example of how to generate folders](/assets/Screen-Recording-2022-03-17-at-22.28.25.gif)
