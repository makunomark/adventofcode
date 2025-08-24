def is_example():
  while True:
    resp = input("Running example? (Y/n)").lower().strip()
    if not resp or resp == "y":
      return True
    elif resp == "n":
      return False
    else:
      print("Invalid selection. Input n or y.")
