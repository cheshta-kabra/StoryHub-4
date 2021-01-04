import React from 'react';
import { StyleSheet, Text, View,Button , ScrollView,FlatList} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import db from '../config'
import WriteStoryScreen from './WriteStoryScreen';

export default class SerchScreen extends React.Component{
    constructor(){
        super()
        this.state={
            allStories:'',
            lastWrittenStory:null,
            search:''
        }
    }
    componentDidMount = async()=>{
        const Storyref=await db.collection('stories').get()
        Storyref.docs.map((doc)=>{
            this.setState({
                allStories:[...this.state.allStories,doc.data()]
            })
        })
    }
    fetchMoreTransction = async()=>{
        var text=this.state.search.toUpperCase()
        var enteredText= text.split('')
        if(enteredText[0].toUpperCase()==='S'){
            const tax = await db.collection('stories').where('Story_Title','==',text).get(
            tax.docs.map((doc)=>{
                this.setState({
                    allStories:[...this.state.allStories,doc.data()],
                    lastWrittenStory:doc
                })
            })
            )
        }
        else if(enteredText[0].toUpperCase()==='A'){
            const tax = await db.collection('stories').where('Author_Name','==',text).get(
            tax.docs.map((doc)=>{
                this.setState({
                    allStories:[...this.state.allStories,doc.data()],
                    lastWrittenStory:doc
                })
            })
            )
        }
    }


    searchTransctions = async(text)=>{
        var enteredText=text.split('')
        var text=text.toUpperCase()
        if(enteredText[0].toUpperCase()==='S'){
            const tax = await db.collection('stories').where('Story_Title','==',text).get(
            tax.docs.map((doc)=>{
                this.setState({
                    allStories:[...this.state.allStories,doc.data()],
                    lastWrittenStory:doc
                })
            })
            )
        }
        else if(enteredText[0].toUpperCase()==='A'){
            const tax = await db.collection('stories').where('Author_Name','==',text).get(
            tax.docs.map((doc)=>{
                this.setState({
                    allStories:[...this.state.allStories,doc.data()],
                    lastWrittenStory:doc
                })
            })
            )
        }
    }
    render(){
        return(
            /*<ScrollView>
                {this.state.allTransctions.map((transaction,index)=>{
                    return(
                        <View key={index}style={{borderBottomWidth:2}}>
                             <Text>{'Book ID'+transaction.Book_ID}</Text>
                             <Text>{'Student ID'+transaction.Student_ID}</Text>
                             <Text>{'transctionType'+transaction.transctionType}</Text>
                             <Text>{'Date'+transaction.Date.toDate()}</Text>
                        </View>
                    )
                })}
            </ScrollView>*/
            <View style={tyles.container}>
                <View><Text style={{fontSize:28,fontWeight:'bold',fontFamily:'Castellar',textAlign:'center'}}>BED TIME STORIES</Text></View>
                <View style={styles.searchBar}>
                    <TextInput style={styles.bar} placeholder={"Enter Story Name / Enter Author's Name"}
                    onChangeText={(text)=>{
                        this.setState({
                            search:text
                        })
                    }} />
                    <TouchableOpacity style={styles.searchButton} onPress={()=>{
                        this.searchTransctions(this.state.search)
                    }}>
                        <Text> SEARCH </Text>
                    </TouchableOpacity>
                </View>
            <FlatList 
            data={this.state.allStories}
            renderItem={({item})=>{
                <View style={{borderBottomWidth:2}}>
                <Text>{"Author's Name"+item.Author_Name}</Text>
                <Text>{"Story Title"+item.Story_Title}</Text>
                <Text>{'Date'+item.Date.toDate()}</Text>
           </View>   
            }}
            keyExtractor={
                (item,index)=>{
                    index.toString()
                }
            }
            onEndReached={this.fetchMoreTransction}
            onEndReachedThreshold={0.8}
            />
            </View>
        )
    }
}
const styles = StyleSheet.create({ 
container: { flex: 1, marginTop: 20 }, 
searchBar:{ flexDirection:'row', height:40, width:'auto', borderWidth:0.5, alignItems:'center', backgroundColor:'grey', },
bar:{ borderWidth:2, height:30, width:300, paddingLeft:10, }, 
searchButton:{ borderWidth:1, height:30, width:50, alignItems:'center', justifyContent:'center', backgroundColor:'green' } 
}) 