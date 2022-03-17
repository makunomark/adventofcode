## Folder structure

Solutions are grouped by year and later inside folders labelled buy number `day-<number>`. For instance the solution for day one 2015 will be in the folder `/2015/day-one` and `/2015/day-two` for the second day and so on.

In each day, inside the `inputs` folder, there are two files, `sample_input.txt` and `input.txt` which hold the input that we get from the questions. The file with `sample` prepended holds the sample input, and the other one holds the actual input. To choose when to use sample input or actual input, we use environment variable named `env`. In before running step 3 in [Running locally](#running-locally), run `export env=prod` to run aganist the atcual input and `export env=test` aganist the sample input.

## Running locally

1. Install dependencies by running `$npm i` in the root folder.
1. Navigate to the problem you want to run.
1. Run the solution by running `$npx ts-node index.ts`
