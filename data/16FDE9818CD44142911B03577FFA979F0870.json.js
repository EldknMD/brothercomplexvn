GS.dataCache['16FDE9818CD44142911B03577FFA979F0870'] = {
    "uid": "16FDE9818CD44142911B03577FFA979F0870",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Jack llega a casa",
        "type": "vn.scene",
        "parentId": "46C936D6411C874C713BCAB76EDA3BF00B4E",
        "chapterUid": "46C936D6411C874C713BCAB76EDA3BF00B4E",
        "order": 2,
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "ApartmentInside_Sunset",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "80B0A91F1FCAF445A748C1E1A2747F02E38B",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "name": "Playful_-_Kidding_Around",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "fadeInDuration": 0,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "FFF305488790824EA31A18F7A05E722E1188",
                "indent": 0
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": null,
                    "characterId": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "zOrder": 0,
                    "origin": 1,
                    "blendMode": 0,
                    "positionType": 2,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 200,
                        "y": 150
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "uid": "ACF8C3304E10F543D039F6E592F4DC10BA8F",
                "indent": 0
            },
            {
                "id": "vn.MessageBoxVisibility",
                "params": {
                    "duration": 30,
                    "waitForCompletion": true,
                    "id": "messageBox",
                    "visible": 1,
                    "animation": {
                        "type": 0,
                        "movement": 3,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "uid": "5C86FE6539AE234B7428A7C51AC918FEB059",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "80BF67615220504B64389F582F172BB5C36F",
                        "defaultText": "I'm Home!"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "B28B78C85F44014E241A54A66D4ED87E449D",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "vn.CharacterJoinScene",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "predefinedPositionId": 0,
                    "expressionId": null,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "zOrder": 0,
                    "origin": 1,
                    "blendMode": 0,
                    "positionType": 2,
                    "motionBlur": {
                        "enabled": 0,
                        "delay": 2,
                        "opacity": 100,
                        "dissolveSpeed": 3
                    },
                    "position": {
                        "x": 700,
                        "y": 200
                    },
                    "animation": {
                        "type": 0,
                        "movement": 2,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "easing": {
                        "type": 0,
                        "inOut": 0
                    },
                    "duration": 60,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "duration": 0,
                        "easing.type": 1,
                        "animation.type": 0,
                        "motionBlur.enabled": 1,
                        "origin": 1,
                        "zOrder": 1,
                        "blendMode": 1,
                        "viewport.type": 1
                    }
                },
                "uid": "63043585305FB7485F18E1019FF1F2D0A214",
                "indent": 0,
                "expanded": false
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "D40DAEF695C26145804BF005C44B39AFC36C",
                        "defaultText": "Hi! <3"
                    },
                    "position": 0,
                    "characterId": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "0E7F8EBA56DBF84BAB393FF3EE24DB94B687",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "1A30A37C70D67841965A2053DE4A2D855B26",
                        "defaultText": "How was your day at school?"
                    },
                    "position": 0,
                    "characterId": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "E645511D31A77340B94815A522981EA8C7C5",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "76B96033378E344C54299586090D64C05D5A",
                        "defaultText": "You knew about Rose, right...?"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "7BAF96B86EDE724B75896A46A76C53BF6F98",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "AF2EF79459259643BC6840531DA369A4289D",
                        "defaultText": "Of course <3"
                    },
                    "position": 0,
                    "characterId": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "9CF76FD67669C74248391B352F5A850E334C",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "57F5EBC916A91543271AA5811A30DB7FCDA0",
                        "defaultText": "I'm so happy you can keep an eye on her at school <3"
                    },
                    "position": 0,
                    "characterId": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "A1F1B6D156151445F79B07C91BA5544403C4",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "65DFF6F999A6724E08899C59721F8F0346CF",
                        "defaultText": "Of course I'll try to look out for her... but- "
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "31FEF2434A23B54D909BF7A358EA9867C02E",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "211460459D5EA646819B72A495FA52826520",
                        "defaultText": "That really puts my mind at ease"
                    },
                    "position": 0,
                    "characterId": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "EFE1454C1A92684CB48BEE671B0769B71989",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "353E9F873AEFB74D49382399B54765ECD638",
                        "defaultText": "Yeah, but mom, could you please tak to her...?"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "01FAC41067C5164D7B5BE521E1E9966F00B5",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "567AF26F2950B44C6B58CE93CB0569F89D67",
                        "defaultText": "I'm still not sure how to handle all of this an she's been a bit..."
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "88CAE9E0016B444757998222EBC1CDFA2CD3",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "DBBCEA8528A1F241F97BA698244EE454AAE2",
                        "defaultText": "Yeah, she can be a bit eager when it comes to... "
                    },
                    "position": 0,
                    "characterId": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "A3DC38D88801044E61192652DC6303ADC17F",
                "expanded": true
            },
            {
                "id": "vn.ShakeCharacter",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 30,
                    "waitForCompletion": 0,
                    "range": {
                        "y": 3,
                        "x": 3
                    },
                    "speed": 1000,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    }
                },
                "uid": "97B4824C40DFA3484889EF1521CACCA805A9",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "FA3DC60D61D21448600A138315412930A1D0",
                        "defaultText": "MOM!"
                    },
                    "position": 0,
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "C910A63D119BD34910183085BD93959CF53B",
                "expanded": true
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "indent": 0,
                "uid": "55306B438D6BE344D05949988480A1362A5C"
            },
            {
                "id": "gs.StopMusic",
                "params": {
                    "layer": 0,
                    "fadeOutDuration": 60,
                    "fieldFlags": {
                        "fadeOutDuration": 0
                    }
                },
                "uid": "1DEB278367001444FA8B0F981A9E7CFB90E6",
                "indent": 0
            },
            {
                "id": "vn.CharacterExitScene",
                "params": {
                    "characterId": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "duration": 60,
                    "waitForCompletion": 0,
                    "easing": {
                        "type": 1,
                        "inOut": 0
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 0
                    }
                },
                "indent": 0,
                "uid": "44E5F32A611F41430949BEC45089F9AA41F8"
            },
            {
                "id": "vn.ChangeScene",
                "params": {
                    "scene": {
                        "uid": "9D0976B758B7C74571895105DBA3FE4BE132",
                        "name": "rose habla por teléfono"
                    },
                    "savePrevious": 0,
                    "erasePictures": 0,
                    "eraseTexts": 0,
                    "eraseVideos": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "0890133F37AC164DBA18C3940E452866E4BA",
                "indent": 0
            }
        ],
        "livePreviewDisabled": false,
        "localizableStrings": {
            "80BF67615220504B64389F582F172BB5C36F": {
                "t": "I'm Home!",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "B28B78C85F44014E241A54A66D4ED87E449D"
                }
            },
            "D40DAEF695C26145804BF005C44B39AFC36C": {
                "t": "Hi! <3",
                "d": {
                    "cid": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "eid": "0E7F8EBA56DBF84BAB393FF3EE24DB94B687"
                }
            },
            "1A30A37C70D67841965A2053DE4A2D855B26": {
                "t": "How was your day at school?",
                "d": {
                    "cid": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "eid": "E645511D31A77340B94815A522981EA8C7C5"
                }
            },
            "76B96033378E344C54299586090D64C05D5A": {
                "t": "You knew about Rose, right...?",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "7BAF96B86EDE724B75896A46A76C53BF6F98"
                }
            },
            "AF2EF79459259643BC6840531DA369A4289D": {
                "t": "Of course <3",
                "d": {
                    "cid": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "eid": "9CF76FD67669C74248391B352F5A850E334C"
                }
            },
            "57F5EBC916A91543271AA5811A30DB7FCDA0": {
                "t": "I'm so happy you can keep an eye on her at school <3",
                "d": {
                    "cid": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "eid": "A1F1B6D156151445F79B07C91BA5544403C4"
                }
            },
            "65DFF6F999A6724E08899C59721F8F0346CF": {
                "t": "Of course I'll try to look out for her... but- ",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "31FEF2434A23B54D909BF7A358EA9867C02E"
                }
            },
            "211460459D5EA646819B72A495FA52826520": {
                "t": "That really puts my mind at ease",
                "d": {
                    "cid": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "eid": "EFE1454C1A92684CB48BEE671B0769B71989"
                }
            },
            "353E9F873AEFB74D49382399B54765ECD638": {
                "t": "Yeah, but mom, could you please tak to her...?",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "01FAC41067C5164D7B5BE521E1E9966F00B5"
                }
            },
            "567AF26F2950B44C6B58CE93CB0569F89D67": {
                "t": "I'm still not sure how to handle all of this an she's been a bit...",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "88CAE9E0016B444757998222EBC1CDFA2CD3"
                }
            },
            "DBBCEA8528A1F241F97BA698244EE454AAE2": {
                "t": "Yeah, she can be a bit eager when it comes to... ",
                "d": {
                    "cid": "3296922B4A7E62491F29FF29EAE6183F8B54",
                    "eid": "A3DC38D88801044E61192652DC6303ADC17F"
                }
            },
            "FA3DC60D61D21448600A138315412930A1D0": {
                "t": "MOM!",
                "d": {
                    "cid": "36FA34704E47C543F34AA4D7316DDB11C167",
                    "eid": "C910A63D119BD34910183085BD93959CF53B"
                }
            }
        }
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}