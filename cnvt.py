from moviepy.editor import *
import os

print("<------------- folderName <mp4 convert_to mp3/find folder> ------------->")
folderName = str(input()).strip()
print("<------------- folderName <export/where to save> ------------->")
pathName = str(input()).strip()

for i in os.listdir(folderName):
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
