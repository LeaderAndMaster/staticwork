# encoding: utf-8
# Created by LvHongwang on 2017-04-06. 
import urllib
url='%E5%82%AC%E6%AC%BE%E9%80%9A%E7%9F%A5%E5%8D%95%E6%81%B6%E6%90%9E'
print urllib.unquote(url).decode('utf-8', 'replace')