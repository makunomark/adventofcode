from .Solution import Solution, INPUTS_DIR

class Day2(Solution):
  NAME = "Day 2"

  example_input_a = "1x1x10" # 1x1x10
  input_a_file = INPUTS_DIR / "day_2_a.txt"

  def calculate_surface_area(self, dims):
    if len(dims) != 3:
      return 0
    l, w, h = dims
    areas = [l*w, w*h, h*l]
    return 2 * sum(areas) + min(areas)

  def sol_a(self):
    super().sol_a()
    total = 0
    for line in self.input_a_data.split('\n'):
      dims = [int(x) for x in line.split('x')]
      area = self.calculate_surface_area(dims)
      total += area
    print("a) Total surface area (with slack): ", total)
