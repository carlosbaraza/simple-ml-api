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
