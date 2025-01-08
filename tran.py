import pandas as pd
import json

# 读取Excel文件
file_path = "XT测试.xlsx"  # 替换为你的文件路径
df = pd.read_excel(file_path)

# 处理数据
result = []
for index, row in df.iterrows():
    # 分割缺德—道德和旁观—行动列
    moral_scores = [int(x) for x in str(row['缺德—道德']).split('，')]
    action_scores = [int(x) for x in str(row['旁观—行动']).split('，')]

    # 构造选项
    options = []
    for i, option_text in enumerate([row['one'], row['two'], row['three'], row['four'], row['five']]):
        options.append({
            "text": option_text,
            "moralScore": moral_scores[i],
            "actionScore": action_scores[i]
        })

    # 构造问题的JSON结构
    question_data = {
        "id": int(row['序号']),
        "text": row['问题'],
        "options": options
    }
    result.append(question_data)

# 将结果保存为JSON文件
output_file = "output.json"
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(result, f, ensure_ascii=False, indent=4)

print(f"转换完成！结果已保存到 {output_file}")
