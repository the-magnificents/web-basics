!/bin/bash
SEARCH_ARTICLE=https://api.figshare.com/v2/articles/
# QUERY='{"order":"published_date", "group_id": 2000013, "page_size": 1,   "limit": 1,}'

getArticles() {
echo $SEARCH_ARTICLE
echo "$1"
  # If arg 1 is json
if [ "$isJson" == "json" ]
  then
    query="$2"
    curl -X POST "${SEARCH_ARTICLE}/search" -H "Content-Type: application/json"-d ${query} | python -mjson.tool
  else 
    echo "Not passing argument"
    # query='{"order":${1}, "group_id": ${2}, "page_size": ${3} }'
    # curl -X POST "${SEARCH_ARTICLE}/search" -H "Content-Type: application/json"-d ${query} | python -mjson.tool
  fi
}

myFunction()
{
    echo "$1"
    echo "$2"
    echo "$3"
}

foo(){
a=10
b=20

if [ $a == $b ]
then
   echo "a is equal to b"
else
   echo "a is not equal to b"
fi
}

"$@"

