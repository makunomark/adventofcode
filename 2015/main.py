from solutions.day_1 import Day1

SOLUTIONS = [Day1]

def display_name(cls):
  return getattr(cls, "NAME", cls.__name__)

def choose_index():
  while True:
    raw = input("Choice [1] (q to quit): ").strip().lower()
    if raw in ("", "1"):
      return 0
    elif raw in ("q", "quit"):
      return None
    elif raw.isdigit():
      idx = int(raw) - 1
      if 0 <= idx < len(SOLUTIONS):
        return idx
    print("Invalid choice. Enter a number or q.")

def main():
  print("Select a solution to run:")
  for i, cls in enumerate(SOLUTIONS, 1):
    print(f"{i}) {display_name(cls)}")
  sel = choose_index()
  if sel is None:
    print("Cancelled.")
    return
  cls = SOLUTIONS[sel]
  sol = cls()
  sol.sol_a()
  sol.sol_b()

if __name__ == "__main__":
  main()
