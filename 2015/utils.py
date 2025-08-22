def is_example():
  resp = input("Running example? (Y/n)").lower().strip()
  if not resp or resp == "y":
    return True
  return False
