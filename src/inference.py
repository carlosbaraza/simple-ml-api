from transformers import TFAutoModelWithLMHead, AutoTokenizer
from transformers import pipeline

sentiment_analysis_model = pipeline('sentiment-analysis')
text_generation_model = pipeline('text-generation')


def sentiment_analysis(text: str):
    result = sentiment_analysis_model(text)
    return result


def text_generation(text: str):
    result = text_generation_model(
        text,
        max_length=80,
        do_sample=False
    )
    return result


t5_model = TFAutoModelWithLMHead.from_pretrained("t5-large", return_dict=True)
t5_tokenizer = AutoTokenizer.from_pretrained("t5-large")


def summarize(text: str):
    # T5 uses a max_length of 512 so we cut the article to 512 tokens.
    inputs = t5_tokenizer.encode(
        "summarize: " + text,
        return_tensors="tf",
        max_length=512
    )
    outputs = t5_model.generate(
        inputs,
        max_length=150,
        min_length=40,
        length_penalty=2.0,
        num_beams=4,
        early_stopping=True
    )
    result = t5_tokenizer.decode(
        outputs[0],
        skip_special_tokens=True,
        clean_up_tokenization_spaces=False,
    )
    return {'summary': result}


def t5_task(task: str):
    inputs = t5_tokenizer.encode(
        task,
        return_tensors="tf",
        max_length=512
    )
    outputs = t5_model.generate(
        inputs,
        max_length=150,
        min_length=40,
        length_penalty=2.0,
        num_beams=4,
        early_stopping=True
    )
    result = t5_tokenizer.decode(outputs[0])
    return result
