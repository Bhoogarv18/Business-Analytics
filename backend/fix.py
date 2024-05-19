from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize Firefox WebDriver
driver = webdriver.Firefox()

# Open the webpage
driver.get("http://127.0.0.1:1338")

# Wait for the dropdown element to be clickable
dropdown = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "model"))
)
dropdown.click()

option_llama = driver.find_element(By.CSS_SELECTOR, 'option[value="llama2-70b"]')
option_llama.click()

