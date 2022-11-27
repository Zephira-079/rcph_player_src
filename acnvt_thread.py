from moviepy.editor import *
import os
import threading

print("<------------- folderName <mp4 convert_to mp3/find folder> ------------->")
folderName = str(input()).strip()
if not folderName:
    folderName = "D:/nyahn_collection/nyahn/_nyahn_"
print("<------------- folderName <export/where to save> ------------->")
pathName = str(input()).strip()
if not pathName:
    pathName = "KawaiiNeko"

def thread_process(thread_list):
    for i in thread_list:
        path = f'{pathName}'
        try:
            videoclip = VideoFileClip(f'{folderName}/{i}')
        except:
            with open("console.log","a") as c:
                c.writelines(f'cant find: {i[:-4]}.mp3\n')
            print("seems cant find it!!!")
            
        if not os.path.exists(path):
            os.mkdir(path)

        try:
            if os.path.isfile(f'{path}/{i[:-4]}.mp3'):
                print(f'file exists at : {path}/{i[:-4]}.mp3')
            else:
                audiofile = videoclip.audio.write_audiofile(f'{i[:-4]}.mp3')
                os.rename(f'{i[:-4]}.mp3', f'{path}/{i[:-4]}.mp3')
        except:
            with open("console.log","a") as c:
                c.writelines(f'cant find: {i[:-4]}.mp3\n')
            print("seems cant find it!!!")

thread_interval = 50
recent_thread = 0
for l in range(len(os.listdir(folderName))):
    if (l % thread_interval) == 0:
        t = threading.Thread(target=thread_process, args=(os.listdir(folderName)[recent_thread:l],))
        t.start()
        recent_thread = l

t = threading.Thread(target=thread_process, args=(os.listdir(folderName)[-(len(os.listdir(folderName)) % thread_interval):],))
t.start()
    

