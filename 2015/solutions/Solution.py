from utils import is_example
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
INPUTS_DIR = BASE_DIR / "inputs"

class Solution:
  NAME = "Base Solution"

  example_input_a = None
  example_input_b = None
  input_a_file = None
  input_b_file = None

  def __init__(self):
    print(f"=== Running: {self.NAME} ===")
    if is_example():
      self.input_a_data = self.example_input_a
      self.input_b_data = self.example_input_b
    else:
      self.input_a_data = self._read(self.input_a_file)
      self.input_b_data = self._read(self.input_b_file)
    
  @staticmethod
  def _read(path):
    if not path:
      return ""
    return Path(path).read_text().strip()

  def sol_a(self):
    if not self.input_b_data:
      print("Input is missing for solution a")
      return
  
  def sol_b(self):
    if not self.input_b_data:
      print("Input is missing for solution b")
      return
