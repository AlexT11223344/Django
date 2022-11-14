import json

from django.shortcuts import render
from django.http import HttpResponse
import os
from django.conf import settings
from djangoProject_2 import settings
from django.http import HttpResponseRedirect
from django.shortcuts import redirect

from django.http import JsonResponse



# dic_id_name = {
#     'https://georgeeliotarchive.org/files/original/63eb6f7841561fd5f4c8e41c42b76508.txt': 'Adam Bede(1859).txt',
#     'https://georgeeliotarchive.org/files/original/ecce6017f39d885060f364c10a266846.txt': 'Brother Jacob(1864).txt',
#     'https://georgeeliotarchive.org/files/original/2149439c54aa729784f77413069e1f82.txt': 'Daniel Deronda(1876).txt',
#     'https://georgeeliotarchive.org/files/original/907b3c33ba7988bf524f20d837f1dc3b.txt': 'Felix Holt, the Radical(1866).txt',
#     'https://georgeeliotarchive.org/files/original/d828ef209fb49bf45bbb2d24f58e5b74.txt': 'Impressions of Theophrastus Such (1879).txt',
#     'https://georgeeliotarchive.org/files/original/947f73407b901969d01aeda630f7197d.txt': 'Middlemarch(1871-72).txt',
#     'https://georgeeliotarchive.org/files/original/3d43f4fe740957af8f44b3cc3c546634.txt': 'Romola(1863).txt',
#     'https://georgeeliotarchive.org/files/original/bc75805af6c1c3c320ecb1a35ce6726d.txt': 'Scenes of Clerical Life(1858).txt',
#     'https://georgeeliotarchive.org/files/original/43c0fcd54037b45ab266e76de89ad6d0.txt': 'Silas Marner(1861).txt',
#     'https://georgeeliotarchive.org/files/original/bb4d5db1d598a65e6955cff838c9e4c4.txt': 'The Lifted Veil(1859).txt',
#     'https://georgeeliotarchive.org/files/original/f1116bc8e477f576ff52d6dd4e6b2079.txt': 'The Mill on the Floss(1860).txt'
# }
dic_id_name = {
    '21626': 'Adam Bede(1859).txt',
    '21627': 'Brother Jacob(1864).txt',
    '21628': 'Daniel Deronda(1876).txt',
    '21635': 'Felix Holt, the Radical(1866).txt',
    '21637': 'Impressions of Theophrastus Such (1879).txt',
    '21638': 'Middlemarch(1871-72).txt',
    '21639': 'Romola(1863).txt',
    '21640': 'Scenes of Clerical Life(1858).txt',
    '21641': 'Silas Marner(1861).txt',
    '21642': 'The Lifted Veil(1859).txt',
    '21643': 'The Mill on the Floss(1860).txt'
}

# Create your views here.
def home(request):
    return render(request, "../templates/index.html")

def get_drop_down_info(request):
    html = "<h1>This is a test page</h1>"
    return HttpResponse(html)

def dict_slice(adict, start, end):
    keys = adict.keys()
    dict_slice = {}
    for k in list(keys)[start:end]:
        dict_slice[k] = adict[k]
    return dict_slice

def test_request(request):
    if request.method == 'GET':
        return HttpResponse('test request is OK, Method is GET')
    elif request.method == 'POST':
        # novel_id = request.POST['select_novel_list']
        # keyword = request.POST['keyword']

        novel_id = request.POST.get('drop_down')
        keyword = request.POST.get('key_word')
        novel_name = dic_id_name[novel_id]
        print(novel_id)
        print(keyword)

        '''Open the file from media'''
        plain_text = open(os.path.join(settings.MEDIA_ROOT/"Plain text of GE's novels with row count", novel_name)).readlines()
        total_frequency = 0
        max_rows = len(plain_text)
        dic_group = {}
        dic_final_result = {}
        final_results = {}
        group_number = 1
        index_start = 0
        for i in plain_text:
            if keyword in i:
                total_frequency += 1
            else:
                continue

        for i in range(0, len(plain_text)):
            if "CHAPTER".lower() in plain_text[i].lower():
                dic_group.update({group_number: plain_text[index_start: i]})
                group_number += 1
                index_start = i
            else:
                continue

        if total_frequency == 0:
            total_frequency = 1
        else:
            pass

        for key, value in dic_group.items():
            group_frequency = 0
            for j in value:
                if keyword in j:
                    group_frequency += 1
                # print(group_frequency)
                relative_frequency = group_frequency / total_frequency
                if relative_frequency == 0:
                    pass
                else:
                    dic_final_result.update({key: [relative_frequency, keyword]})

        context = {
            'final_result': json.dumps(dic_final_result)
        }

        # print(novel_name)
        # print(keyword)
        # print(total_frequency)
        # print(dic_group)
        print(dic_final_result)
        # print(context)
        # sorted_dic_final_result = sorted(dic_final_result.items(), key=lambda e: e[1][0], reverse=True)
        # print(sorted_dic_final_result)
        # for i in sorted_dic_final_result:
        #     final_results.update({i[0]: i[1]})
        # print(final_results)
        response = JsonResponse(dic_final_result)
        return response


        # return render(request, 'index.html', locals())
        # return HttpResponseRedirect(request.path_info)
        # return redirect(request.path)
    else:
        print('Method error')
        return HttpResponse('Request method error')
