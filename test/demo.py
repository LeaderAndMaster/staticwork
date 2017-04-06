# -*- coding: UTF-8 -*-
from selenium import webdriver

from selenium.webdriver.common.keys import Keys

import selenium.webdriver.support.ui as ui

from selenium.webdriver.common.action_chains import ActionChains

#完成点击下载ppt

def get_ppt_download():

    start_url = 'http://www.hjenglish.com/dl/bec/'

    driver = webdriver.Chrome()

    driver.maximize_window()

    wait = ui.WebDriverWait(driver,10)

    driver.get(start_url)

    h = driver.current_window_handle

    driver.find_elements_by_xpath('//a[@class="fastLogin"]')[0].click()

    driver.find_elements_by_xpath('//input[@class="hp-username"]')[0].send_keys("")  #引号内输入用户名

    driver.find_elements_by_xpath('//input[@class="hp-password"]')[0].send_keys("")  #引号内输入密码

    driver.find_elements_by_xpath('//button[@class="hp-btn hp-btn-green"]')[0].click()

    time.sleep(5)

    for i in driver.window_handles:

        if i == h:

            driver.switch_to_window(h)

            article_list = driver.find_elements_by_xpath('//ul[@id="article_list"]/li')

            for index in range(0,len(article_list)):

                for m in driver.window_handles:

                    if m == h:

                        driver.switch_to_window(h)

                        article_list[index].find_elements_by_xpath('./div[@class="article_list_info"]/h2/a[@class=" a_article_title"]')[0].click()

                for t in driver.window_handles:

                    if t != h:

                        driver.switch_to_window(t)

                        p = driver.find_elements_by_xpath('//div[@class="btn_downpage_area"]/a[@class="btn_downpage"]')

                        if len(p):

                            p[0].click()

                            driver.find_elements_by_xpath('//ul[@id="down_linklist"]/li[1]')[0].click()

                            time.sleep(5)

                        driver.close()

                    else:

                        driver.switch_to_window(h)
                        time.sleep(3)

                        driver.close()