from selenium import webdriver
from bs4 import BeautifulSoup

# Initialize the WebDriver (assuming you have it installed and configured)
def get_similar_links(link):
    driver = webdriver.Firefox()
    # Navigate to your desired webpage
    # driver.get("https://www.amazon.in/LG-Inverter-Fully-Automatic-Washing-FHM1207SDM/dp/B0BMGD9Y2X/ref=sr_1_2_sspa?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.8wfIBNY3T88h-xUAOTlyhqF8iv7WtVQUYk6oVUmPZxa3DYK4Bbed3p9-wr0VS64aG8ibluIAn3hJMDspOXOLtaWt31O8X5iS2Xb6iaDTlXAROfbJ8B8jXywNgw9CQ1aP8sV4Q5z0XgZJbJf7qfDdcleRCjm3cBnX9rb7iTxk89-R5wjRggmnhSTYe51sbkpND9-pICm6RP4nTolF15UKEj2mBZ_3LTS3YTKSnPqw-jGrzxdQ-3RDB8PyixvrJCKwdqAYqJQnhIG8wy4kiwxVPoMP5Gop-Wi7tl_jAU3EPw4.4cnJsag6Ta4UeDWfdB7ISizFQzqVkHSXSEpGxExvH_Y&dib_tag=se&pd_rd_r=1233d397-9e23-47b8-8554-df19fa3b1647&pd_rd_w=6sYlQ&pd_rd_wg=JJUoZ&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=KXSRWGDH5A6SKRGGKCK5&qid=1711872030&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&psc=1")
    driver.get(link)
    # Get the page source after letting JavaScript to execute
    page_source = driver.page_source

    # Close the WebDriver
    driver.quit()

    # Parse the page source using BeautifulSoup
    # soup = BeautifulSoup(page_source, 'html.parser')

    str_links = ['sp_detail_thematic-top_brands','sp_detail2-prime_theme_for_non_prime_members','sp_detail_thematic-prime_theme_for_non_prime_members','sp_detail2-cfv']
    ele_list = []
    for str_link in str_links:
        try:    
            # Find the div with id 'sp_detail_thematic-top_brands'
            soup = BeautifulSoup(page_source, 'html.parser')
            
            div_element = soup.find('div', id=str_link)

            # Find the nested div with class 'a-carousel' within the previously found div
            nested_div = div_element.find('ol', class_='a-carousel')
            i=1
            for li in nested_div.find_all('li'):
                div_element_22 = li.find('div',class_='a-section sp_offerVertical p13n-asin sp_ltr_offer')
                a_element = div_element_22.find('a',class_='a-link-normal')
                h_ref = a_element.get('href')
                ele_list.append("https://www.amazon.in"+h_ref)
                print(h_ref)
                print(i)
                i+=1
        except Exception as e:
            print(e)
    return ele_list
    
# # Print the nested div element
# print(nested_div)
# with open("output.txt", "w", encoding="utf-8") as file:
#     file.write(str(ele_list))
# x = get_similar_links("https://www.amazon.in/LG-Inverter-Fully-Automatic-Washing-FHM1207SDM/dp/B0BMGD9Y2X/ref=sr_1_2_sspa?_encoding=UTF8&content-id=amzn1.sym.58c90a12-100b-4a2f-8e15-7c06f1abe2be&dib=eyJ2IjoiMSJ9.8wfIBNY3T88h-xUAOTlyhqF8iv7WtVQUYk6oVUmPZxa3DYK4Bbed3p9-wr0VS64aG8ibluIAn3hJMDspOXOLtaWt31O8X5iS2Xb6iaDTlXAROfbJ8B8jXywNgw9CQ1aP8sV4Q5z0XgZJbJf7qfDdcleRCjm3cBnX9rb7iTxk89-R5wjRggmnhSTYe51sbkpND9-pICm6RP4nTolF15UKEj2mBZ_3LTS3YTKSnPqw-jGrzxdQ-3RDB8PyixvrJCKwdqAYqJQnhIG8wy4kiwxVPoMP5Gop-Wi7tl_jAU3EPw4.4cnJsag6Ta4UeDWfdB7ISizFQzqVkHSXSEpGxExvH_Y&dib_tag=se&pd_rd_r=1233d397-9e23-47b8-8554-df19fa3b1647&pd_rd_w=6sYlQ&pd_rd_wg=JJUoZ&pf_rd_p=58c90a12-100b-4a2f-8e15-7c06f1abe2be&pf_rd_r=KXSRWGDH5A6SKRGGKCK5&qid=1711872030&refinements=p_85%3A10440599031&rps=1&s=kitchen&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGZfYnJvd3Nl&psc=1")
# x = get_similar_links('https://www.amazon.in/dp/B0CMZKV2H1/ref=sspa_dk_detail_2?pd_rd_i=B0CMZKV2H1&pd_rd_w=zd3A5&content-id=amzn1.sym.cfb442af-d763-47b6-9176-863585ada839&pf_rd_p=cfb442af-d763-47b6-9176-863585ada839&pf_rd_r=GEFT58FT3YS5KVJ2ERMJ&pd_rd_wg=ynscr&pd_rd_r=9e3738e5-a8cd-42e0-aa8d-240856373b43&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1')
# x = get_similar_links('https://www.amazon.in/gp/aw/d/B07FLWZVTN/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=ca876e2e12796ec4eb6cf3655a527451&hsa_cr_id=8657820610002&sr=1-1-undefined&ref_=sbx_be_dp_arbies_lsi4d_asin_0_img&pd_rd_w=I099M&content-id=amzn1.sym.8b13584a-c7fa-402c-b0a3-ddf39b989f1f&pf_rd_p=8b13584a-c7fa-402c-b0a3-ddf39b989f1f&pf_rd_r=98BPAC36JX6683EW5E6J&pd_rd_wg=jq9SB&pd_rd_r=e42149f9-ec25-4576-beb6-8bf2f80c7713&th=1&psc=1')
# print(len(x))