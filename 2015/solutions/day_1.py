from .Solution import Solution, INPUTS_DIR

class Day1(Solution):
  NAME = "Day 1"

  example_input_a = "))("
  example_input_b = "()())"

  input_a_file = INPUTS_DIR / "day_1_a.txt"
  input_b_file = INPUTS_DIR / "day_1_b.txt"

  def sol_a(self):
    super().sol_a()
    # print(self.input_a_data)
    floor = 0
    for char in self.input_a_data:
        if char == "(":
            floor += 1
        elif char == ")":
            floor -= 1
    print(f"a) Final floor: {floor}")
  
  def sol_b(self):
    super().sol_b()
    floor = 0
    for idx, ch in enumerate(self.input_b_data, start=1):
      if ch == "(":
        floor += 1
      else:
        floor -= 1
      
      if floor == -1:
        print(f"b) {idx}")
        break