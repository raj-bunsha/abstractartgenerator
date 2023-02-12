from django.shortcuts import render
import image_saver
import json
from django.http.response import FileResponse,HttpResponse

# Create your views here.
def home(request):
    if request.method=="POST":
        data=json.loads(request.body)
        pallete=data["pallete"]
        layer1=data.get('layer1')
        layer2=data.get('layer2')
        overlay=data.get('overlay')
        print(overlay,"overlay",data)
        # print(pallete ,layer1["Styles"],layer2["Styles"],layer1["Shape"],layer2["Shape"],layer1["Complexity"],layer2["Complexity"],layer1["Size"],layer2["Size"],overlay)
        data=image_saver.generator(int(pallete),layer1,layer2,int(overlay))
        img = open('./api/media/image.png', 'rb')
        return FileResponse(img)
    else:
        return HttpResponse("HI")