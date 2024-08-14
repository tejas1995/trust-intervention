(()=>{"use strict";var t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{B:()=>o});let e="https://tejassrinivasan.pythonanywhere.com/";var o=!1,n=[];let i,r,s,a,c=-1,l=null,u=null,_=0,d=1,b=0,h=0;function g(t){b+=t,0==b?$("#button_instructions_prev").attr("disabled","true"):$("#button_instructions_prev").removeAttr("disabled"),b>=5?($("#instructions_and_decorations").show(),$("#button_instructions_next").val("Start study")):($("#instructions_and_decorations").hide(),$("#button_instructions_next").val("Next")),6==b&&($("#main_box_instructions").hide(),$("#main_box_experiment").show(),m()),$("#main_box_instructions").children(":not(input)").each(((t,e)=>{$(e).hide()})),$(`#instructions_${b}`).show()}function p(t){s=Date.now(),u=t,t?($("#button_decision_correct").attr("activedecision","true"),$("#button_decision_incorrect").removeAttr("activedecision")):($("#button_decision_correct").removeAttr("activedecision"),$("#button_decision_incorrect").attr("activedecision","true")),$("#how_confident_div").show()}function m(){if($("#button_decision_incorrect").removeAttr("activedecision"),$("#button_decision_correct").removeAttr("activedecision"),$("#button_decision_incorrect").removeAttr("disabled"),$("#button_decision_correct").removeAttr("disabled"),$("#range_val").removeAttr("disabled"),$("#how_confident_div").hide(),$("#button_place_bet").hide(),$("#button_next").hide(),$("#result_span").hide(),$("#range_text").text("-"),$("#range_val").val(3),c+=1,c>=n.length)return $("#main_box_experiment").hide(),void(o?$("#main_box_end_mock").show():$("#main_box_end").show());if(l=n[c],$("#question_span").html(l.question),$("#answer_span").html(l.answer),$("#confidence_span").html(l.ai_confidence),l.hasOwnProperty("reward_ratio")){let[t,e]=l.reward_ratio;t=Number(t),e=Number(e),d=t/e}else d=1;r=Date.now(),$("#progress").text(`Progress: ${c+1} / ${n.length}`)}$("#button_instructions_next").on("click",(()=>g(1))),$("#button_instructions_prev").on("click",(()=>g(-1))),$("#button_next").on("click",(()=>{if(-1!=c){let t={question_i:c,user_balance:_,user_bet_val:i,user_decision:u};t.times={decision:s-r,bet:a-s,next:Date.now()-a},t.question=l,t.count_exited_page=h,async function(t){if(o)console.log("logged (mock)",t);else{t.url_data=globalThis.url_data,console.log("logged",t),console.log("Logging to",e+"log");try{return await $.ajax(e+"log",{data:JSON.stringify({project:"trust-intervention",uid:globalThis.uid,payload:JSON.stringify(t)}),type:"POST",contentType:"application/json"})}catch(t){console.log(t)}}}(t),h=0}m()})),$("#range_val").on("input change",(function(){i=$(this).val()/5*.1,$("#range_text").text(`If you are right, you get $${(i*d).toFixed(2)}. If you are wrong, you lose $${(i/1).toFixed(2)}.`),$("#button_place_bet").show()})),$("#button_decision_correct").on("click",(()=>p(!0))),$("#button_decision_incorrect").on("click",(()=>p(!1))),$("#button_place_bet").on("click",(function(){a=Date.now();let t,e="You guessed that the system was ";u?(e+="<span class='color_correct'>correct</span> ",l.ai_is_correct?(e+="and the system was <span class='color_correct'>correct</span>.",t=!0):(e+="but the system was <span class='color_incorrect'>not correct</span>.",t=!1)):(e+="<span class='color_incorrect'>incorrect</span> ",l.ai_is_correct?(e+="but the system was <span class='color_correct'>correct</span>.",t=!1):(e+="and the system was <span class='color_incorrect'>not correct</span>.",t=!0)),e+="<br>",t?(e+=`You gain $${(i*d).toFixed(2)}.`,_+=i*d):(e+=`You lose $${(i/1).toFixed(2)}.`,_-=i/1,_=Math.max(0,_)),$("#balance").text(`Balance: $${_.toFixed(2)} + $0.5`),$("#result_span").html(e),$("#button_next").show(),$("#result_span").show(),$("#button_place_bet").hide(),$("#range_val").attr("disabled","true"),$("#button_decision_incorrect").attr("disabled","true"),$("#button_decision_correct").attr("disabled","true")}));const w=new URLSearchParams(window.location.search),v=w.get("start"),f=w.get("uid");if(globalThis.url_data=function(t){const e={};for(const[o,n]of t)e[o]=n;return e}(w.entries()),null!=f){if(globalThis.uid=f,"prolific_random"==globalThis.uid){let t=`${Math.floor(10*Math.random())}`.padStart(3,"0");globalThis.uid=`${w.get("prolific_queue_name")}_${t}`}}else{let t=null;for(;null==t;)t=prompt("Enter your user id. Please get in touch if you were not assigned an id but wish to participate in this experiment.");globalThis.uid=t}globalThis.uid.startsWith("demo_paper")&&(o=!0),console.log("Running with UID",globalThis.uid),async function(){return await $.getJSON(`baked_queues/${globalThis.uid}.json?t=${Date.now()}`)}().catch((t=>{console.log("Invalid user id."),console.log(globalThis.uid),window.location.reload()})).then((t=>{n=t,null!=v&&(c=parseInt(v)-1,console.log("Starting from",c)),g(0),$("#main_box_instructions").show(),$("#instructions_and_decorations").hide()})),console.log("Starting session with UID:",globalThis.uid);let x=!1;document.onvisibilitychange=()=>{x||(h+=1,x=!0,x=!1)}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ssbUJBQWxCeEIsV0FBV00sSUFBMEIsQ0FDckMsSUFBSXVCLEVBQVcsR0FBR2IsS0FBS2MsTUFBc0IsR0FBaEJkLEtBQUtlLFlBQWlCQyxTQUFTLEVBQUcsS0FDL0RoQyxXQUFXTSxJQUFNLEdBQUdZLEVBQVVsRSxJQUFJLDBCQUEwQjZFLEcsTUFJN0QsQ0FDSCxJQUFJSSxFQUFpQixLQUNyQixLQUFvQixNQUFiQSxHQUNIQSxFQUFZQyxPQUFPLHNIQUV2QmxDLFdBQVdNLElBQU0yQixDLENBSWpCakMsV0FBV00sSUFBSTZCLFdBQVcsZ0JBQzFCNUUsR0FBVyxHQUlmdUMsUUFBUUMsSUFBSSxtQkFBb0JDLFdBQVdNLEtEOU1wQ1QsaUJBS0gsYUFIbUJ2QixFQUFFOEQsUUFDakIsZ0JBQWdCcEMsV0FBV00sY0FBY25CLEtBQUtDLFFBR3RELENDeU1BaUQsR0FBWUMsT0FBT0MsSUFFZnpDLFFBQVFDLElBQUksb0JBQ1pELFFBQVFDLElBQUlDLFdBQVdNLEtBQ3ZCYyxPQUFPQyxTQUFTbUIsUUFBUSxJQUUxQkMsTUFBTUMsSUFDSmxGLEVBQU9rRixFQUNjLE1BQWpCbkIsSUFDQTFELEVBQWE4RSxTQUFTcEIsR0FBaUIsRUFDdkN6QixRQUFRQyxJQUFJLGdCQUFpQmxDLElBR2pDTyxFQUFrQixHQUNsQkUsRUFBRSwwQkFBMEJHLE9BQzVCSCxFQUFFLGlDQUFpQ0ssTUFBTSxJQUc3Q21CLFFBQVFDLElBQUksNkJBQThCQyxXQUFXTSxLQUVyRCxJQUFJc0MsR0FBZSxFQUNuQkMsU0FBU0MsbUJBQXFCLEtBQ3JCRixJQUNEekUsR0FBcUIsRUFDckJ5RSxHQUFlLEVBRWZBLEdBQWUsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy8uL3NyYy9jb25uZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgREVWTU9ERSB9IGZyb20gJy4vZ2xvYmFscydcbmltcG9ydCB7IE1PQ0tNT0RFIH0gZnJvbSAnLi9tYWluJ1xuXG5sZXQgU0VSVkVSX0xPR19ST09UID0gREVWTU9ERSA/IFwiaHR0cDovLzEyNy4wLjAuMTo1MDAwL1wiIDogXCJodHRwczovL3RlamFzc3Jpbml2YXNhbi5weXRob25hbnl3aGVyZS5jb20vXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRfZGF0YSgpOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIGluY2x1ZGUgdGltZXN0YW1wIHNvIHRoYXQgdGhpbmdzIGRvbid0IGdldCBjYWNoZWRcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgJC5nZXRKU09OKFxuICAgICAgICBgYmFrZWRfcXVldWVzLyR7Z2xvYmFsVGhpcy51aWR9Lmpzb24/dD0ke0RhdGUubm93KCl9YCxcbiAgICApXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ19kYXRhKGRhdGEpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChNT0NLTU9ERSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2dlZCAobW9jaylcIiwgZGF0YSlcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIGRhdGFbXCJ1cmxfZGF0YVwiXSA9IGdsb2JhbFRoaXMudXJsX2RhdGFcbiAgICBjb25zb2xlLmxvZyhcImxvZ2dlZFwiLCBkYXRhKVxuICAgIGNvbnNvbGUubG9nKFwiTG9nZ2luZyB0b1wiLCBTRVJWRVJfTE9HX1JPT1QgKyBcImxvZ1wiKVxuXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0ICQuYWpheChcbiAgICAgICAgICAgIFNFUlZFUl9MT0dfUk9PVCArIFwibG9nXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBcInRydXN0LWludGVydmVudGlvblwiLFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IGdsb2JhbFRoaXMudWlkLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBERVZNT0RFIH0gZnJvbSBcIi4vZ2xvYmFsc1wiXG5leHBvcnQgdmFyIFVJRDogc3RyaW5nXG5leHBvcnQgdmFyIE1PQ0tNT0RFOiBib29sZWFuID0gZmFsc2VcbmltcG9ydCB7IGxvYWRfZGF0YSwgbG9nX2RhdGEgfSBmcm9tICcuL2Nvbm5lY3RvcidcbmltcG9ydCB7IHBhcmFtc1RvT2JqZWN0IH0gZnJvbSBcIi4vdXRpbHNcIlxuXG52YXIgZGF0YTogYW55W10gPSBbXVxubGV0IHF1ZXN0aW9uX2kgPSAtMVxubGV0IHF1ZXN0aW9uOiBhbnkgPSBudWxsXG5sZXQgdXNlcl9kZWNpc2lvbjogbnVsbCB8IGJvb2xlYW4gPSBudWxsXG5sZXQgYmFsYW5jZSA9IDBcbmxldCBiZXRfdmFsOiBudW1iZXJcbmxldCBiZXRfdmFsX3JhdGlvOiBudW1iZXIgPSAxXG5sZXQgdGltZV9xdWVzdGlvbl9zdGFydDogbnVtYmVyXG5sZXQgdGltZV9iZXRfc3RhcnQ6IG51bWJlclxubGV0IHRpbWVfc2hvd2VkX3Jlc3VsdHNfc3RhcnQ6IG51bWJlclxubGV0IGluc3RydWN0aW9uX2k6IG51bWJlciA9IDBcbmxldCBjb3VudF9leGl0ZWRfcGFnZTogbnVtYmVyID0gMFxuXG5mdW5jdGlvbiBuZXh0X2luc3RydWN0aW9ucyhpbmNyZW1lbnQ6IG51bWJlcikge1xuICAgIGluc3RydWN0aW9uX2kgKz0gaW5jcmVtZW50XG5cbiAgICBpZiAoaW5zdHJ1Y3Rpb25faSA9PSAwKSB7XG4gICAgICAgICQoXCIjYnV0dG9uX2luc3RydWN0aW9uc19wcmV2XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBcInRydWVcIilcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI2J1dHRvbl9pbnN0cnVjdGlvbnNfcHJldlwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIilcbiAgICB9XG4gICAgaWYgKGluc3RydWN0aW9uX2kgPj0gNSkge1xuICAgICAgICAkKFwiI2luc3RydWN0aW9uc19hbmRfZGVjb3JhdGlvbnNcIikuc2hvdygpXG4gICAgICAgICQoXCIjYnV0dG9uX2luc3RydWN0aW9uc19uZXh0XCIpLnZhbChcIlN0YXJ0IHN0dWR5XCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJChcIiNpbnN0cnVjdGlvbnNfYW5kX2RlY29yYXRpb25zXCIpLmhpZGUoKVxuICAgICAgICAkKFwiI2J1dHRvbl9pbnN0cnVjdGlvbnNfbmV4dFwiKS52YWwoXCJOZXh0XCIpXG4gICAgfVxuICAgIGlmIChpbnN0cnVjdGlvbl9pID09IDYpIHtcbiAgICAgICAgJChcIiNtYWluX2JveF9pbnN0cnVjdGlvbnNcIikuaGlkZSgpXG4gICAgICAgICQoXCIjbWFpbl9ib3hfZXhwZXJpbWVudFwiKS5zaG93KClcbiAgICAgICAgbmV4dF9xdWVzdGlvbigpXG4gICAgfVxuXG4gICAgJChcIiNtYWluX2JveF9pbnN0cnVjdGlvbnNcIikuY2hpbGRyZW4oXCI6bm90KGlucHV0KVwiKS5lYWNoKChfLCBlbCkgPT4ge1xuICAgICAgICAkKGVsKS5oaWRlKClcbiAgICB9KVxuICAgICQoYCNpbnN0cnVjdGlvbnNfJHtpbnN0cnVjdGlvbl9pfWApLnNob3coKVxufVxuJChcIiNidXR0b25faW5zdHJ1Y3Rpb25zX25leHRcIikub24oXCJjbGlja1wiLCAoKSA9PiBuZXh0X2luc3RydWN0aW9ucygrMSkpXG4kKFwiI2J1dHRvbl9pbnN0cnVjdGlvbnNfcHJldlwiKS5vbihcImNsaWNrXCIsICgpID0+IG5leHRfaW5zdHJ1Y3Rpb25zKC0xKSlcblxuJChcIiNidXR0b25fbmV4dFwiKS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAocXVlc3Rpb25faSAhPSAtMSkge1xuICAgICAgICBsZXQgbG9nZ2VkX2RhdGEgPSB7XG4gICAgICAgICAgICBcInF1ZXN0aW9uX2lcIjogcXVlc3Rpb25faSxcbiAgICAgICAgICAgIFwidXNlcl9iYWxhbmNlXCI6IGJhbGFuY2UsXG4gICAgICAgICAgICBcInVzZXJfYmV0X3ZhbFwiOiBiZXRfdmFsLFxuICAgICAgICAgICAgXCJ1c2VyX2RlY2lzaW9uXCI6IHVzZXJfZGVjaXNpb24sXG4gICAgICAgIH1cblxuICAgICAgICBsb2dnZWRfZGF0YVsndGltZXMnXSA9IHtcbiAgICAgICAgICAgIFwiZGVjaXNpb25cIjogdGltZV9iZXRfc3RhcnQgLSB0aW1lX3F1ZXN0aW9uX3N0YXJ0LFxuICAgICAgICAgICAgXCJiZXRcIjogdGltZV9zaG93ZWRfcmVzdWx0c19zdGFydCAtIHRpbWVfYmV0X3N0YXJ0LFxuICAgICAgICAgICAgXCJuZXh0XCI6IERhdGUubm93KCkgLSB0aW1lX3Nob3dlZF9yZXN1bHRzX3N0YXJ0XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VkX2RhdGFbJ3F1ZXN0aW9uJ10gPSBxdWVzdGlvblxuICAgICAgICBsb2dnZWRfZGF0YVsnY291bnRfZXhpdGVkX3BhZ2UnXSA9IGNvdW50X2V4aXRlZF9wYWdlXG4gICAgICAgIGxvZ19kYXRhKGxvZ2dlZF9kYXRhKVxuICAgICAgICBjb3VudF9leGl0ZWRfcGFnZSA9IDBcbiAgICB9XG4gICAgbmV4dF9xdWVzdGlvbigpXG59KTtcblxuJCgnI3JhbmdlX3ZhbCcpLm9uKCdpbnB1dCBjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgYmV0X3ZhbCA9ICgkKHRoaXMpLnZhbCgpISBhcyBudW1iZXIpIC8gNSAqIDAuMVxuICAgICQoXCIjcmFuZ2VfdGV4dFwiKS50ZXh0KGBJZiB5b3UgYXJlIHJpZ2h0LCB5b3UgZ2V0ICQkeyhiZXRfdmFsKmJldF92YWxfcmF0aW8pLnRvRml4ZWQoMil9LiBJZiB5b3UgYXJlIHdyb25nLCB5b3UgbG9zZSAkJHsoYmV0X3ZhbC8xLjApLnRvRml4ZWQoMil9LmApXG4gICAgJChcIiNidXR0b25fcGxhY2VfYmV0XCIpLnNob3coKVxufSk7XG5cbmZ1bmN0aW9uIGZsaXBfdXNlcl9kZWNpc2lvbihjb3JyZWN0KSB7XG4gICAgdGltZV9iZXRfc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgdXNlcl9kZWNpc2lvbiA9IGNvcnJlY3RcbiAgICBpZiAoY29ycmVjdCkge1xuICAgICAgICAkKFwiI2J1dHRvbl9kZWNpc2lvbl9jb3JyZWN0XCIpLmF0dHIoXCJhY3RpdmVkZWNpc2lvblwiLCBcInRydWVcIilcbiAgICAgICAgJChcIiNidXR0b25fZGVjaXNpb25faW5jb3JyZWN0XCIpLnJlbW92ZUF0dHIoXCJhY3RpdmVkZWNpc2lvblwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjYnV0dG9uX2RlY2lzaW9uX2NvcnJlY3RcIikucmVtb3ZlQXR0cihcImFjdGl2ZWRlY2lzaW9uXCIpXG4gICAgICAgICQoXCIjYnV0dG9uX2RlY2lzaW9uX2luY29ycmVjdFwiKS5hdHRyKFwiYWN0aXZlZGVjaXNpb25cIiwgXCJ0cnVlXCIpXG4gICAgfVxuICAgICQoXCIjaG93X2NvbmZpZGVudF9kaXZcIikuc2hvdygpXG59XG5cbiQoXCIjYnV0dG9uX2RlY2lzaW9uX2NvcnJlY3RcIikub24oXCJjbGlja1wiLCAoKSA9PiBmbGlwX3VzZXJfZGVjaXNpb24odHJ1ZSkpXG4kKFwiI2J1dHRvbl9kZWNpc2lvbl9pbmNvcnJlY3RcIikub24oXCJjbGlja1wiLCAoKSA9PiBmbGlwX3VzZXJfZGVjaXNpb24oZmFsc2UpKVxuXG5mdW5jdGlvbiBzaG93X3Jlc3VsdCgpIHtcbiAgICB0aW1lX3Nob3dlZF9yZXN1bHRzX3N0YXJ0ID0gRGF0ZS5ub3coKVxuXG4gICAgbGV0IG1lc3NhZ2UgPSBcIllvdSBndWVzc2VkIHRoYXQgdGhlIHN5c3RlbSB3YXMgXCJcbiAgICBsZXQgc3VjY2VzczogYm9vbGVhblxuICAgIGlmICh1c2VyX2RlY2lzaW9uKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gXCI8c3BhbiBjbGFzcz0nY29sb3JfY29ycmVjdCc+Y29ycmVjdDwvc3Bhbj4gXCJcbiAgICAgICAgaWYgKHF1ZXN0aW9uIVtcImFpX2lzX2NvcnJlY3RcIl0pIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCJhbmQgdGhlIHN5c3RlbSB3YXMgPHNwYW4gY2xhc3M9J2NvbG9yX2NvcnJlY3QnPmNvcnJlY3Q8L3NwYW4+LlwiXG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBcImJ1dCB0aGUgc3lzdGVtIHdhcyA8c3BhbiBjbGFzcz0nY29sb3JfaW5jb3JyZWN0Jz5ub3QgY29ycmVjdDwvc3Bhbj4uXCJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSArPSBcIjxzcGFuIGNsYXNzPSdjb2xvcl9pbmNvcnJlY3QnPmluY29ycmVjdDwvc3Bhbj4gXCJcbiAgICAgICAgaWYgKCFxdWVzdGlvbiFbXCJhaV9pc19jb3JyZWN0XCJdKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IFwiYW5kIHRoZSBzeXN0ZW0gd2FzIDxzcGFuIGNsYXNzPSdjb2xvcl9pbmNvcnJlY3QnPm5vdCBjb3JyZWN0PC9zcGFuPi5cIlxuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gXCJidXQgdGhlIHN5c3RlbSB3YXMgPHNwYW4gY2xhc3M9J2NvbG9yX2NvcnJlY3QnPmNvcnJlY3Q8L3NwYW4+LlwiXG4gICAgICAgICAgICBzdWNjZXNzID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBtZXNzYWdlICs9IFwiPGJyPlwiXG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgbWVzc2FnZSArPSBgWW91IGdhaW4gJCR7KGJldF92YWwqYmV0X3ZhbF9yYXRpbykudG9GaXhlZCgyKX0uYFxuICAgICAgICBiYWxhbmNlICs9IGJldF92YWwqYmV0X3ZhbF9yYXRpb1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gYFlvdSBsb3NlICQkeyhiZXRfdmFsLzEuMCkudG9GaXhlZCgyKX0uYFxuICAgICAgICBiYWxhbmNlIC09IGJldF92YWwvMS4wXG4gICAgICAgIGJhbGFuY2UgPSBNYXRoLm1heCgwLCBiYWxhbmNlKVxuICAgIH1cbiAgICAkKFwiI2JhbGFuY2VcIikudGV4dChgQmFsYW5jZTogJCR7YmFsYW5jZS50b0ZpeGVkKDIpfSArICQwLjVgKVxuICAgICQoXCIjcmVzdWx0X3NwYW5cIikuaHRtbChtZXNzYWdlKVxuICAgICQoXCIjYnV0dG9uX25leHRcIikuc2hvdygpXG4gICAgJChcIiNyZXN1bHRfc3BhblwiKS5zaG93KClcbiAgICAkKFwiI2J1dHRvbl9wbGFjZV9iZXRcIikuaGlkZSgpXG5cbiAgICAkKCcjcmFuZ2VfdmFsJykuYXR0cihcImRpc2FibGVkXCIsIFwidHJ1ZVwiKVxuICAgICQoXCIjYnV0dG9uX2RlY2lzaW9uX2luY29ycmVjdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpXG4gICAgJChcIiNidXR0b25fZGVjaXNpb25fY29ycmVjdFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpXG59XG5cbiQoXCIjYnV0dG9uX3BsYWNlX2JldFwiKS5vbihcImNsaWNrXCIsIHNob3dfcmVzdWx0KVxuXG5mdW5jdGlvbiBuZXh0X3F1ZXN0aW9uKCkge1xuICAgIC8vIHJlc3RvcmUgcHJldmlvdXMgc3RhdGUgb2YgVUlcbiAgICAkKFwiI2J1dHRvbl9kZWNpc2lvbl9pbmNvcnJlY3RcIikucmVtb3ZlQXR0cihcImFjdGl2ZWRlY2lzaW9uXCIpXG4gICAgJChcIiNidXR0b25fZGVjaXNpb25fY29ycmVjdFwiKS5yZW1vdmVBdHRyKFwiYWN0aXZlZGVjaXNpb25cIilcbiAgICAkKFwiI2J1dHRvbl9kZWNpc2lvbl9pbmNvcnJlY3RcIikucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpXG4gICAgJChcIiNidXR0b25fZGVjaXNpb25fY29ycmVjdFwiKS5yZW1vdmVBdHRyKFwiZGlzYWJsZWRcIilcbiAgICAkKCcjcmFuZ2VfdmFsJykucmVtb3ZlQXR0cihcImRpc2FibGVkXCIpXG4gICAgJChcIiNob3dfY29uZmlkZW50X2RpdlwiKS5oaWRlKClcbiAgICAkKFwiI2J1dHRvbl9wbGFjZV9iZXRcIikuaGlkZSgpXG4gICAgJChcIiNidXR0b25fbmV4dFwiKS5oaWRlKClcbiAgICAkKFwiI3Jlc3VsdF9zcGFuXCIpLmhpZGUoKVxuICAgICQoXCIjcmFuZ2VfdGV4dFwiKS50ZXh0KFwiLVwiKVxuICAgICQoXCIjcmFuZ2VfdmFsXCIpLnZhbCgzKVxuXG4gICAgcXVlc3Rpb25faSArPSAxXG4gICAgaWYgKHF1ZXN0aW9uX2kgPj0gZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgJChcIiNtYWluX2JveF9leHBlcmltZW50XCIpLmhpZGUoKVxuICAgICAgICBpZiAoTU9DS01PREUpIHtcbiAgICAgICAgICAgICQoXCIjbWFpbl9ib3hfZW5kX21vY2tcIikuc2hvdygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiI21haW5fYm94X2VuZFwiKS5zaG93KClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgcXVlc3Rpb24gPSBkYXRhW3F1ZXN0aW9uX2ldXG5cbiAgICAkKFwiI3F1ZXN0aW9uX3NwYW5cIikuaHRtbChxdWVzdGlvbiFbXCJxdWVzdGlvblwiXSlcbiAgICAkKFwiI2Fuc3dlcl9zcGFuXCIpLmh0bWwocXVlc3Rpb24hW1wiYW5zd2VyXCJdKVxuICAgICQoXCIjY29uZmlkZW5jZV9zcGFuXCIpLmh0bWwocXVlc3Rpb24hW1wiYWlfY29uZmlkZW5jZVwiXSlcblxuICAgIC8vIHNldCBiZXQgdmFsdWUgcmF0aW9cbiAgICBpZihxdWVzdGlvbi5oYXNPd25Qcm9wZXJ0eShcInJld2FyZF9yYXRpb1wiKSkge1xuICAgICAgICBsZXQgW3JhdGlvMSwgcmF0aW8yXSA9IHF1ZXN0aW9uW1wicmV3YXJkX3JhdGlvXCJdXG4gICAgICAgIHJhdGlvMSA9IE51bWJlcihyYXRpbzEpXG4gICAgICAgIHJhdGlvMiA9IE51bWJlcihyYXRpbzIpXG4gICAgICAgIGJldF92YWxfcmF0aW8gPSByYXRpbzEvcmF0aW8yXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYmV0X3ZhbF9yYXRpbyA9IDFcbiAgICB9XG5cbiAgICB0aW1lX3F1ZXN0aW9uX3N0YXJ0ID0gRGF0ZS5ub3coKVxuICAgICQoXCIjcHJvZ3Jlc3NcIikudGV4dChgUHJvZ3Jlc3M6ICR7cXVlc3Rpb25faSArIDF9IC8gJHtkYXRhLmxlbmd0aH1gKVxufVxuXG4vLyBnZXQgdXNlciBpZCBhbmQgbG9hZCBxdWV1ZVxuLy8gdHJ5IHRvIHNlZSBpZiBzdGFydCBvdmVycmlkZSB3YXMgcGFzc2VkXG5jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuY29uc3Qgc3RhcnRPdmVycmlkZSA9IHVybFBhcmFtcy5nZXQoJ3N0YXJ0Jyk7XG5jb25zdCBVSURGcm9tVVJMID0gdXJsUGFyYW1zLmdldChcInVpZFwiKVxuZ2xvYmFsVGhpcy51cmxfZGF0YSA9IHBhcmFtc1RvT2JqZWN0KHVybFBhcmFtcy5lbnRyaWVzKCkpXG5cbmlmIChVSURGcm9tVVJMICE9IG51bGwpIHtcbiAgICBnbG9iYWxUaGlzLnVpZCA9IFVJREZyb21VUkwgYXMgc3RyaW5nXG4gICAgaWYgKGdsb2JhbFRoaXMudWlkID09IFwicHJvbGlmaWNfcmFuZG9tXCIpIHtcbiAgICAgICAgbGV0IHF1ZXVlX2lkID0gYCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApfWAucGFkU3RhcnQoMywgXCIwXCIpXG4gICAgICAgIGdsb2JhbFRoaXMudWlkID0gYCR7dXJsUGFyYW1zLmdldChcInByb2xpZmljX3F1ZXVlX25hbWVcIil9XyR7cXVldWVfaWR9YFxuICAgIH1cbn0gZWxzZSBpZiAoREVWTU9ERSkge1xuICAgIGdsb2JhbFRoaXMudWlkID0gXCJkZW1vXCJcbn0gZWxzZSB7XG4gICAgbGV0IFVJRF9tYXliZTogYW55ID0gbnVsbFxuICAgIHdoaWxlIChVSURfbWF5YmUgPT0gbnVsbCkge1xuICAgICAgICBVSURfbWF5YmUgPSBwcm9tcHQoXCJFbnRlciB5b3VyIHVzZXIgaWQuIFBsZWFzZSBnZXQgaW4gdG91Y2ggaWYgeW91IHdlcmUgbm90IGFzc2lnbmVkIGFuIGlkIGJ1dCB3aXNoIHRvIHBhcnRpY2lwYXRlIGluIHRoaXMgZXhwZXJpbWVudC5cIilcbiAgICB9XG4gICAgZ2xvYmFsVGhpcy51aWQgPSBVSURfbWF5YmUhXG59XG5cbi8vIHZlcnNpb24gZm9yIHBhcGVyXG5pZiAoZ2xvYmFsVGhpcy51aWQuc3RhcnRzV2l0aChcImRlbW9fcGFwZXJcIikpIHtcbiAgICBNT0NLTU9ERSA9IHRydWVcbn0gZWxzZSB7XG5cbn1cbmNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoIFVJRFwiLCBnbG9iYWxUaGlzLnVpZClcbmxvYWRfZGF0YSgpLmNhdGNoKChfZXJyb3IpID0+IHtcbiAgICAvL2FsZXJ0KFwiSW52YWxpZCB1c2VyIGlkLlwiKVxuICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCB1c2VyIGlkLlwiKVxuICAgIGNvbnNvbGUubG9nKGdsb2JhbFRoaXMudWlkISlcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbn1cbikudGhlbigobmV3X2RhdGEpID0+IHtcbiAgICBkYXRhID0gbmV3X2RhdGFcbiAgICBpZiAoc3RhcnRPdmVycmlkZSAhPSBudWxsKSB7XG4gICAgICAgIHF1ZXN0aW9uX2kgPSBwYXJzZUludChzdGFydE92ZXJyaWRlKSAtIDFcbiAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBmcm9tXCIsIHF1ZXN0aW9uX2kpXG4gICAgfVxuICAgIC8vIG5leHRfcXVlc3Rpb24oKVxuICAgIG5leHRfaW5zdHJ1Y3Rpb25zKDApXG4gICAgJChcIiNtYWluX2JveF9pbnN0cnVjdGlvbnNcIikuc2hvdygpXG4gICAgJChcIiNpbnN0cnVjdGlvbnNfYW5kX2RlY29yYXRpb25zXCIpLmhpZGUoKVxufSlcblxuY29uc29sZS5sb2coXCJTdGFydGluZyBzZXNzaW9uIHdpdGggVUlEOlwiLCBnbG9iYWxUaGlzLnVpZCEpXG5cbmxldCBhbGVydF9hY3RpdmUgPSBmYWxzZVxuZG9jdW1lbnQub252aXNpYmlsaXR5Y2hhbmdlID0gKCkgPT4ge1xuICAgIGlmICghYWxlcnRfYWN0aXZlKSB7XG4gICAgICAgIGNvdW50X2V4aXRlZF9wYWdlICs9IDFcbiAgICAgICAgYWxlcnRfYWN0aXZlID0gdHJ1ZVxuICAgICAgICAvLyBhbGVydChcIlBsZWFzZSBkb24ndCBsZWF2ZSB0aGUgcGFnZS4gSWYgeW91IGRvIHNvIGFnYWluLCB3ZSBtYXkgcmVzdHJpY3QgcGF5aW5nIHlvdS5cIilcbiAgICAgICAgYWxlcnRfYWN0aXZlID0gZmFsc2VcbiAgICB9XG59IiwiZnVuY3Rpb24gcGFyYW1zVG9PYmplY3QoZW50cmllcykge1xuICBjb25zdCByZXN1bHQgPSB7fVxuICAvLyBlYWNoICdlbnRyeScgaXMgYSBba2V5LCB2YWx1ZV0gdHVwcGxlXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGVudHJpZXMpIHtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7IHBhcmFtc1RvT2JqZWN0IH0iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTRVJWRVJfTE9HX1JPT1QiLCJNT0NLTU9ERSIsImRhdGEiLCJiZXRfdmFsIiwidGltZV9xdWVzdGlvbl9zdGFydCIsInRpbWVfYmV0X3N0YXJ0IiwidGltZV9zaG93ZWRfcmVzdWx0c19zdGFydCIsInF1ZXN0aW9uX2kiLCJxdWVzdGlvbiIsInVzZXJfZGVjaXNpb24iLCJiYWxhbmNlIiwiYmV0X3ZhbF9yYXRpbyIsImluc3RydWN0aW9uX2kiLCJjb3VudF9leGl0ZWRfcGFnZSIsIm5leHRfaW5zdHJ1Y3Rpb25zIiwiaW5jcmVtZW50IiwiJCIsImF0dHIiLCJyZW1vdmVBdHRyIiwic2hvdyIsInZhbCIsImhpZGUiLCJuZXh0X3F1ZXN0aW9uIiwiY2hpbGRyZW4iLCJlYWNoIiwiXyIsImVsIiwiZmxpcF91c2VyX2RlY2lzaW9uIiwiY29ycmVjdCIsIkRhdGUiLCJub3ciLCJ0ZXh0IiwibGVuZ3RoIiwiaHRtbCIsInJhdGlvMSIsInJhdGlvMiIsIk51bWJlciIsIm9uIiwibG9nZ2VkX2RhdGEiLCJhc3luYyIsImNvbnNvbGUiLCJsb2ciLCJnbG9iYWxUaGlzIiwidXJsX2RhdGEiLCJhamF4IiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2plY3QiLCJ1aWQiLCJwYXlsb2FkIiwidHlwZSIsImNvbnRlbnRUeXBlIiwiZSIsImxvZ19kYXRhIiwidGhpcyIsInRvRml4ZWQiLCJzdWNjZXNzIiwibWVzc2FnZSIsIk1hdGgiLCJtYXgiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInN0YXJ0T3ZlcnJpZGUiLCJVSURGcm9tVVJMIiwiZW50cmllcyIsInJlc3VsdCIsInZhbHVlIiwicGFyYW1zVG9PYmplY3QiLCJxdWV1ZV9pZCIsImZsb29yIiwicmFuZG9tIiwicGFkU3RhcnQiLCJVSURfbWF5YmUiLCJwcm9tcHQiLCJzdGFydHNXaXRoIiwiZ2V0SlNPTiIsImxvYWRfZGF0YSIsImNhdGNoIiwiX2Vycm9yIiwicmVsb2FkIiwidGhlbiIsIm5ld19kYXRhIiwicGFyc2VJbnQiLCJhbGVydF9hY3RpdmUiLCJkb2N1bWVudCIsIm9udmlzaWJpbGl0eWNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=