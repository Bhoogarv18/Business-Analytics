import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.options import Options

# URL to scrape
url = 'http://127.0.0.1:1338/chat/'
#url = 'https://chat.openai.com/chat'
# Initialize Selenium WebDriver (assuming Firefox)

def summarize(txt):
    # Wait for the page to load completely
    options = Options()
    options.headless = True
    
    driver = webdriver.Firefox(options=options)
    driver.get(url)
    driver.implicitly_wait(10)

    # Find the textarea element by its id
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "message-input"))
    )

    # Input the provided text into the textarea
#     txt = '''User: I've been feeling overwhelmed lately, like I can't keep up with everything.

# Therapist: It sounds like you're experiencing a lot of stress. What do you think is contributing to that feeling of being overwhelmed?

# User: I think it's a combination of work deadlines, family responsibilities, and personal expectations.

# Therapist: It's understandable that managing all of those aspects of your life can feel challenging. Have you noticed any patterns or triggers that exacerbate your stress?

# User: I tend to procrastinate when I feel overwhelmed, which only adds to the pressure later on.

# Therapist: Procrastination can certainly amplify stress. Have you explored any strategies for breaking that cycle?

# User: I've tried making to-do lists and setting smaller, more manageable goals, but sometimes it still feels like too much.

# Therapist: It's great that you're actively seeking solutions. Perhaps we can work together to develop some additional coping mechanisms tailored to your specific needs.

# User: That sounds helpful. I also struggle with feelings of guilt when I take time for myself instead of focusing on my responsibilities.

# Therapist: Self-care is crucial for maintaining overall well-being. It's important to recognize that prioritizing your own needs is not selfish but necessary for your mental health.

# User: I hadn't thought about it that way before. I'll try to be more mindful of practicing self-care without feeling guilty about it.

# Therapist: It's a process, and it's okay to give yourself permission to prioritize self-care. Let's continue exploring strategies to help you manage stress and find a healthier balance in your life'''

    prmpt = 'Generate a summarized report in 5 single line points.'
    text = txt+prmpt
    element.send_keys(text)

    # Click the send button
    send_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "send-button"))
    )
    send_button.click()

    # Wait for the response to load
    time.sleep(10)

    # Find the div element with class "content"
    # Wait for the response to load
    time.sleep(10)

    # Find the div element with class "content"
    element.send_keys(text)

    # Click the send button
    send_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "send-button"))
    )
    send_button.click()

    content_div = WebDriverWait(driver, 30).until(
        EC.presence_of_element_located((By.CLASS_NAME, 'message'))
    )

    print(content_div)
    # Print the entire HTML content of the content_div
    print(content_div.get_attribute("outerHTML"))

    # Extract all the <li> elements within the div
    list_items = WebDriverWait(driver, 10).until(
        EC.visibility_of_all_elements_located((By.CSS_SELECTOR, '.content li'))
    )

    # Print the number of <li> elements found
    print("Number of <li> elements found:", len(list_items))

    # Extract text from each <li> element and store in a list
    li_texts = [li.text for li in list_items]

    # Print the list of <li> element texts
    for text in li_texts:
        print(text)

    # Close the browser
    time.sleep(5)
    driver.quit()
    return li_texts
# summarize()
# summarize('''Wireless Bluetooth Earbuds: "Superb sound, comfy fit, reliable Bluetooth."
# Multifunctional Blender: "Sleek, versatile, easy cleanup."
# Portable Power Bank: "Compact, long-lasting, phone savior."
# Fitness Tracker Smartwatch: "Accurate, responsive, great value."
# Non-Stick Frying Pan: "Easy cooking, easy clean-up."
# Resistance Bands Set: "Durable, versatile, challenging workouts."
# Robot Vacuum Cleaner: "Effortless cleaning, powerful suction."
# Insulated Stainless Steel Water Bottle: "Keeps drinks cold, leak-proof, sleek."
# Instant Pot Multi-Cooker: "Speedy cooking, versatile options, kitchen essential."
# Noise-Canceling Headphones: "Peace in noise, top-notch sound. Give me in points how should i improve the quality of my product give only in 5 one line points, ''')